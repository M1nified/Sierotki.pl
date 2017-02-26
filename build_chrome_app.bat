rmdir /s /Q chrome_app
mkdir chrome_app
copy /y chrome\manifest.json chrome_app\manifest.json
xcopy /y /s images\*.png chrome_app\images\