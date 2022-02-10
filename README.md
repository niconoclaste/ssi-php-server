# SSI PHP SERVER

Local server supporting SSI, PHP, hot reload and Shift-JIS encoded files

<br>

## Dependencies
___

- gulp
- gulp-connect-php
- gulp-convert-encoding
- connect-ssi
- browser-sync

<br>
<br>

## Configuration
___

First, you need to have PHP installed on your machine in order to run PHP scripts.

Then open the [gulpfile.js] file and copy the path of your php.exe and php.ini files.

```javascript
// before
const phpExe = 'path-to-php.exe';
const phpIni = 'path-to-php.ini';

// after :
const phpExe = 'C:/foo/bar/php.exe';
const phpIni = 'C:/foo/bar/php.ini';
```
Thats all !

<br>
<br>

## Install
___
<br>

```sh
npm i
# or
pnpm i
```
<br>
<br>

## Launch SSI + PHP server with hot reload
___
<br>


## UTF-8 encoded files
```sh
npm run utf8
# or
gulp uft8
```
- serve [src] folder
- watch changes in [src] folder and reload browser

<br><br>


## Shift_JIS encoded files
```sh
npm run shiftJis
# or
gulp shiftJis
```
- copy [src] files to [dist] folder
- convert HTML, CSS and JS files from shift-jis to utf-8
- serve [dist] folder
- watch changes in [src] folder
  - copy [src] files to [dist] folder
  - convert HTML, CSS and JS files from shift-jis to utf-8
  - reload browser
