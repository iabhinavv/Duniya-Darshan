import re

with open("src/app.css", "r") as f:
    css = f.read()

# Replace the --sans variable definition
css = re.sub(
    r'--sans:.*?;\n',
    '--sans:"Playfair Display",serif;\n  --yeseva:"Yeseva One",serif;\n',
    css
)

# Replace var(--sans) with var(--yeseva) everywhere else
css = css.replace('var(--sans)', 'var(--yeseva)')

# Bump up small font sizes by 3px if they are under 13px
def bump_size(match):
    size = float(match.group(1))
    if size < 13:
        size += 3
    # format without trailing .0 if integer
    s_str = f"{size:g}"
    return f"font-size:{s_str}px"

css = re.sub(r'font-size:(\d+\.?\d*)px', bump_size, css)

with open("src/app.css", "w") as f:
    f.write(css)

print("CSS updated successfully")
