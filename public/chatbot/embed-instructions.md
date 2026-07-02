# Adding the Chatbot to sainteangele.ca

## 1. Upload the files
Upload these 3 files to your site (same folder is fine, e.g. `/chatbot/`):
- `content.js`
- `widget.js`
- `widget.css`

## 2. Add these lines before `</body>` on every page you want the chatbot on
(Or put it in your site's shared footer/layout file so it shows on every page automatically.)

```html
<link rel="stylesheet" href="/chatbot/widget.css">
<script src="/chatbot/content.js"></script>
<script src="/chatbot/widget.js"></script>
```

Adjust the paths (`/chatbot/...`) to match wherever you upload the files.

## 3. That's it
A chat bubble will appear in the bottom-right corner of the page. No other setup needed — it runs entirely in the browser, no server, no API key, no ongoing cost.

---

## Updating what the bot knows
Only edit **`content.js`**. It has instructions written at the top of the file.
You do not need to touch `widget.js` or `widget.css` unless you want to change
how the chat window looks or behaves.

After editing `content.js`, just re-upload it (overwrite the old one). Changes
show up immediately — no rebuild step.

## Changing the look
Colors, size, and fonts are controlled by variables at the top of `widget.css`:

```css
--sa-primary: #7a1f2b;   /* main color */
--sa-primary-dark: #5e1620;
```

Change `#7a1f2b` to any hex color to match branding.

## Notes for future client sites (reuse plan)
This widget was built to be reusable:
- `content.js` is the only file that's specific to a business — swap it out
  per client and everything else (`widget.js`, `widget.css`) stays the same.
- The `church` object inside `content.js` can be renamed/generalized
  (e.g. `business`) for non-church clients without touching the engine.
- Matching logic in `widget.js` is generic keyword/phrase matching — it's not
  church-specific in any way.
