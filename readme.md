## Control Direction Scroll

Allows you to scroll by a single line using the default keys `ctrl-up` and `ctrl-down`.

You can override the keys via your [keymap settings](https://hyper.is/#keymaps).  e.g.

```sh
keymaps: {
  'ctrl-dir-scroll:scroll-line-up': 'ctrl+shift+up',
  'ctrl-dir-scroll:scroll-line-down': 'ctrl+shift+down'
}
```

Please file a github issue with questions or bugs.

### To hack on this plugin locally

*If you're on windows and the below doesn't work for you, figure it out :P*
```sh
hub clone olsonpm/hyper-ctrl-dir-scroll
npm install --no-save
cd hyper-ctrl-dir-scroll
./build.sh
./create-symlink.sh

# add 'hyper-ctrl-dir-scroll' to your localPlugins inside ~/.hyper.js

# open hyper
```

I don't currently have a script to watch for changes and build accordingly.  Feel free to add one.
