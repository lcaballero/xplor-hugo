#!/bin/bash

dw=1920
dh=1080

w=$(identify -format "%w" $1)
h=$(identify -format "%h" $1)

rw=$(echo "scale=2; $w / $dw" | bc)
rh=$(echo "scale=2; $h / $dh" | bc)

sh=$(echo "scale=2; $dh / $h" | bc)
sw=$(echo "scale=2; $dw / $w" | bc)

echo "$w x $h, $rw, $rh, $sw, $sh ($dw x $dh)"


# convert static/img/bg-1.jpeg -scale 37% static/img/bg-1.png