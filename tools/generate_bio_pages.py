#!/usr/bin/env python3
"""Generate optimized standalone bio pages from program-bios.js."""

from __future__ import annotations

import html
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BIO_DIR = ROOT / "bio-htmls"
SITE_URL = "https://heatedrivalrymusicalparody.com"
PROGRAM_BIOS = ROOT / "program-bios.js"


def unescape_js_string(value: str) -> str:
    return bytes(value, "utf-8").decode("unicode_escape")


def extract_quoted_value(source: str, start: int) -> tuple[str, int]:
    if source[start] != '"':
        raise ValueError("Expected opening quote")

    parts: list[str] = []
    index = start + 1

    while index < len(source):
        char = source[index]
        if char == "\\" and index + 1 < len(source):
            parts.append(source[index : index + 2])
            index += 2
            continue
        if char == '"':
            return unescape_js_string("".join(parts)), index + 1
        parts.append(char)
        index += 1

    raise ValueError("Unterminated string")


def parse_profile_block(block: str) -> dict[str, str]:
    profile: dict[str, str] = {}

    for field in ("id", "name", "image", "bioHtml"):
        marker = f'{field}: "'
        marker_index = block.index(marker)
        value, _ = extract_quoted_value(block, marker_index + len(field) + 2)
        profile[field] = value

    return profile


def load_profiles() -> dict[str, dict[str, str]]:
    source = PROGRAM_BIOS.read_text(encoding="utf-8")
    profiles_start = source.index("var profiles = {") + len("var profiles = {")
    profiles_end = source.index("};", profiles_start)
    profiles_block = source[profiles_start:profiles_end]

    profiles: dict[str, dict[str, str]] = {}
    slug_pattern = re.compile(r'"([a-z-]+)":\s*\{')

    matches = list(slug_pattern.finditer(profiles_block))
    for index, match in enumerate(matches):
        slug = match.group(1)
        block_start = match.end() - 1
        block_end = matches[index + 1].start() if index + 1 < len(matches) else len(profiles_block)
        block = profiles_block[block_start:block_end]
        profiles[slug] = parse_profile_block(block)

    if not profiles:
        raise SystemExit("No profiles parsed from program-bios.js")

    return profiles


def role_for(profile_id: str, source: str) -> str:
    role_pattern = re.compile(
        rf'\{{\s*id:\s*"{re.escape(profile_id)}"(?:,\s*role:\s*"([^"]*)")?',
        re.S,
    )
    roles: list[str] = []
    for match in role_pattern.finditer(source):
        role = match.group(1)
        if role and role not in roles:
            roles.append(role)
    return " · ".join(roles[:2])


def plain_description(bio_html: str, name: str) -> str:
    text = re.sub(r"<[^>]+>", " ", bio_html)
    text = html.unescape(re.sub(r"\s+", " ", text)).strip()
    if len(text) > 155:
        return text[:152].rstrip() + "..."
    return text or f"Bio for {name} from Heated Rivalry: The Musical Parody!"


def webp_path(image_path: str) -> str:
    base, _ = image_path.rsplit(".", 1)
    return f"{base}.webp"


def render_page(profile: dict[str, str], role: str) -> str:
    name = profile["name"]
    slug = profile["id"]
    image = profile["image"]
    bio_html = profile["bioHtml"]
    description = plain_description(bio_html, name)
    title = html.escape(f"{name} | Cast & Creative | Heated Rivalry: The Musical Parody!")
    escaped_name = html.escape(name)
    escaped_role = html.escape(role)
    escaped_description = html.escape(description)
    canonical = f"{SITE_URL}/bio-htmls/bio-{slug}.html"
    image_url = f"{SITE_URL}/{image}"
    role_markup = f'<p class="bio-profile-role">{escaped_role}</p>' if role else ""

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">

    <title>{title}</title>
    <meta name="description" content="{escaped_description}">

    <link rel="canonical" href="{canonical}">

    <meta name="theme-color" content="#1a1025">

    <meta property="og:type" content="profile">
    <meta property="og:site_name" content="Heated Rivalry: The Musical Parody!">
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{escaped_description}">
    <meta property="og:url" content="{canonical}">
    <meta property="og:image" content="{image_url}">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{title}">
    <meta name="twitter:description" content="{escaped_description}">
    <meta name="twitter:image" content="{image_url}">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="../cast.css">
    <link rel="stylesheet" href="../bio.css">

    <script defer src="../script.js"></script>

    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@graph": [
            {{
                "@type": "WebPage",
                "name": "{escaped_name} | Cast & Creative",
                "description": "{escaped_description}",
                "inLanguage": "en-US",
                "isPartOf": {{
                    "@type": "WebSite",
                    "name": "Heated Rivalry: The Musical Parody!"
                }}
            }},
            {{
                "@type": "Person",
                "name": "{escaped_name}",
                "image": "{image_url}",
                "description": "{escaped_description}",
                "memberOf": {{
                    "@type": "PerformingGroup",
                    "name": "Quick & Funny Musicals"
                }}
            }}
        ]
    }}
    </script>
</head>
<body>

<a href="#main-content" class="skip-link">Skip to main content</a>

<header class="site-header">
    <nav class="navbar" aria-label="Main navigation">
        <a href="../index.html" class="nav-logo-alt">
            <picture>
                <source srcset="../images/HR-logo-alpha.webp" type="image/webp">
                <img src="../images/HR-logo-alpha.png" alt="Heated Rivalry: The Musical Parody!">
            </picture>
        </a>
        <ul class="nav-links">
            <li><a href="../cast.html" aria-current="page">Cast & Creative</a></li>
            <li><a href="../media.html">Media</a></li>
            <li><a href="../press.html">Press</a></li>
        </ul>
        <div class="nav-actions">
            <a href="../index.html#tickets" class="tickets-nav-btn">Tickets</a>
            <a href="https://www.instagram.com/heatedrivalrymusicalparody/" target="_blank" rel="noopener noreferrer" class="instagram-link" aria-label="Heated Rivalry on Instagram">
                <img src="../images/instagram.svg" alt="" width="30" height="30">
            </a>
            <button type="button" class="hamburger" aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu">
                <span></span><span></span><span></span>
            </button>
        </div>
    </nav>
    <div class="mobile-menu" id="mobile-menu">
        <a href="../cast.html" aria-current="page">Cast & Creative</a>
        <a href="../media.html">Media</a>
        <a href="../press.html">Press</a>
    </div>
</header>

<main id="main-content" class="bio-page">
    <div class="container">
        <p class="bio-back-link">
            <a href="../cast.html" class="accent-link">&larr; Back to Cast & Creative</a>
        </p>

        <article class="bio-profile">
            <picture>
                <source srcset="../{html.escape(webp_path(image))}" type="image/webp">
                <img
                    src="../{html.escape(image)}"
                    alt="{escaped_name}"
                    class="bio-profile-image"
                    width="320"
                    height="320"
                    loading="lazy"
                >
            </picture>

            <h1>{escaped_name}</h1>

            {role_markup}

            <div class="bio-profile-content modalBio">
                {bio_html}
            </div>
        </article>
    </div>
</main>

<footer>
    <nav class="footer-links" aria-label="Footer navigation">
        <a href="../cast.html" aria-current="page">Cast & Creative</a>
        <a href="../media.html">Media</a>
        <a href="../press.html">Press</a>
        <a href="../index.html#tickets">Tickets</a>
        <a href="https://www.instagram.com/heatedrivalrymusicalparody/" target="_blank" rel="noopener noreferrer">Instagram</a>
    </nav>
    <div class="copyright">
        © 2026 Heated Rivalry: The Musical Parody - Quick & Funny Musicals.<br>
        All Rights Reserved.<br>
        Website by <a href="https://www.sapersteindesign.com" target="_blank" rel="noopener noreferrer" class="accent-link">Saperstein Creative.</a>
    </div>
</footer>

</body>
</html>
"""


def write_sitemap_entries(slugs: list[str]) -> None:
    sitemap = ROOT / "sitemap.xml"
    lines = [line for line in sitemap.read_text(encoding="utf-8").splitlines() if "bio-htmls/" not in line]

    insert_at = next(i for i, line in enumerate(lines) if line.strip() == "</urlset>")
    entries: list[str] = []
    for slug in sorted(slugs):
        entries.extend(
            [
                "    <url>",
                f"        <loc>{SITE_URL}/bio-htmls/bio-{slug}.html</loc>",
                "        <changefreq>yearly</changefreq>",
                "        <priority>0.5</priority>",
                "    </url>",
            ]
        )
    lines[insert_at:insert_at] = entries
    sitemap.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> int:
    source = PROGRAM_BIOS.read_text(encoding="utf-8")
    profiles = load_profiles()
    BIO_DIR.mkdir(exist_ok=True)

    for slug, profile in sorted(profiles.items()):
        role = role_for(profile["id"], source)
        page = render_page(profile, role)
        output = BIO_DIR / f"bio-{slug}.html"
        output.write_text(page, encoding="utf-8")
        print(f"Wrote {output.relative_to(ROOT)}")

    write_sitemap_entries([profile["id"] for profile in profiles.values()])
    print(f"Generated {len(profiles)} bio pages.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
