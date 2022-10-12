export default {
  fetch: req => fetch('avatars.githubusercontent.com/u' + new URL(req.url).pathname)
}
