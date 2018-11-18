# BantuDESA

## Cara (ngarahin) project di local ke branch
1) Arahin ke branch "Frontend" (khusus frontend)
```
$ git branch --set-upstream-to=origin/Frontend
```
2) Lakukan **pull** biar data terupdate
```
$ git pull
```
3) Kalau mau **push** ke branch Frontend:
```
$ git push --set-upstream origin Frontend
```
4) Terus tambah apa yang mau di push
```
$ git add .
```
5) Jangan lupa commitnya (**WAJIB**)
```
$ git commit -m "Isi commitnya apa di sini"
```
6) Abis itu baru push
```
$ git push
```

## Cara run web nya
1) Pastikan service mysql dan apache sudah berjalan
2) [Shift+Klik Kanan] pada main folder projek, klik "Open command window here" atau "Git Bash Here" (kalau sudah punya GitHub)
3) Ketik "nodemon" di cmd atau gitbash, lalu tekan [Enter]

Note: Kalau mengubah sesuatu, tinggal save saja, otomatis nodemon me-restart server jadi nggak perlu [Ctrl+C] buka "nodemon" lagi

Semangat! ^.^