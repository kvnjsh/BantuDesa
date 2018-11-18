import cv2
import math
import time
import numpy as np

def dec_to_bin(x):                                  # Fungsi mengubah desimal menjadi binary (8-bit)
    return '%08d' % int(bin(x)[2:])

def decrypt_steganography(img, word_len):           # Fungsi Dekripsi Steganografi
    row, col, ch = img.shape
    word = ''
    w = int(math.floor(int(word_len)/col))
    for i in range(0,w+1):
        if (i == w):
            col = int(word_len) % col
        for j in range(0,col):
            blue,green,red = img[i][j]

            blue = dec_to_bin(blue)[5:]
            green = dec_to_bin(green)[5:]
            red = dec_to_bin(red)[5:]

            char = red[1:]+green[1:]+blue
            char = int(char, 2)
            word = word + chr(char)

    return word

def main():                                         # Mulai program DEKRIPSI
    img = cv2.imread("encrypted_image.png")             # Masukkan input gambar yang terenkripsi
    count = input()                                     # Masukkan panjang kalimat yang ingin diketahui

    start_time = time.time()                            # Mulai stopwatch untuk menghitung waktu operasi algoritme
    message = decrypt_steganography(img, count)         # Masukkan pesan yang telah terdekripsi ke 'message'
    with open('decrypted_message.txt', 'w') as the_file:
        if(len(message)>1500):
            for i in range(int(0),int(len(message)/1500)+1):
                print(message[1500*i:1500*(i+1)])
                the_file.write(message[1500*i:1500*(i+1)])
        else:
            print(message)                                      # Print hasilnya
            the_file.write(message)

    print("--- %s seconds ---" % (time.time() - start_time))    # Perlihatkan kompleksitas waktu algoritme

main()
