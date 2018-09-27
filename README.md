# sass-loader-bug-demo

### To reproduce [sass-loader#556](https://github.com/webpack-contrib/sass-loader/issues/556):

```sh
npm install
npm test
```

The build should fail.

This happens because `sass-loader` tries to import the `globals` npm module instead of letting `node-sass` import the `css/globals.scss` file.

If you change the `sass-loader` version to `6.0.7` and re-run the commands above, the build will succeed.
