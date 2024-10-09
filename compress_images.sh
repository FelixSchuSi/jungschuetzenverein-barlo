# small version of images
`for file in ./*; do /mnt/c/Users/fschu/Downloads/libwebp-1.4.0-windows-x64/libwebp-1.4.0-window
s-x64/bin/cwebp.exe -q 10 "$file" -o "webp_klein/${file%.*}.webp"; done`

# big version of images
`for file in ./*; do /mnt/c/Users/fschu/Downloads/libwebp-1.4.0-windows-x64/libwebp-1.4.0-window
s-x64/bin/cwebp.exe -q 75 "$file" -o "webp_gross/${file%.*}.webp"; done`
