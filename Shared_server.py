import socket
import os

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind(("", 12345))

s.listen(10)
c, addr = s.accept()
print('{} connected.'.format(addr))