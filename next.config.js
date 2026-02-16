javascript/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
```

4. Commit changes

---

### **FILE 3: `.gitignore`**

1. Click "Add file" → "Create new file"
2. Name: `.gitignore`
3. Copy this:
```
node_modules/
.next/
.env*.local
.vercel
