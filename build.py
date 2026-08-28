#!/usr/bin/env python3
"""Rebuild index.html from src/.

    python3 build.py

You only need this if you edit the source. Opening index.html needs nothing.
"""
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "src")
JS = os.path.join(SRC, "js")


def read(path):
    with open(path, encoding="utf-8") as fh:
        return fh.read()


def main():
    css = read(os.path.join(SRC, "app.css"))
    names = sorted(f for f in os.listdir(JS) if f.endswith(".js"))
    chunks = []
    for name in names:
        chunks.append("/* ===== %s ===== */\n%s" % (name, read(os.path.join(JS, name))))
    js = "\n\n".join(chunks)

    html = read(os.path.join(SRC, "index.template.html"))
    html = html.replace("/*{{CSS}}*/", css)
    html = html.replace("/*{{JS}}*/", js)

    out = os.path.join(HERE, "index.html")
    with open(out, "w", encoding="utf-8") as fh:
        fh.write(html)

    print("index.html  %.0f KB  (%d js files)" % (len(html.encode()) / 1024, len(names)))
    for name in names:
        print("   %s" % name)


if __name__ == "__main__":
    main()
