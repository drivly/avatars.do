export default {
  fetch: req => fetch('https://avatars.githubusercontent.com/u' + new URL(req.url).pathname)
}
