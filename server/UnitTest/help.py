import random

def create_random_str(length):
    chars:list[str]=[]
    for i in range(26):
        chars.append(chr(ord('a')+i))
        chars.append(chars[-1].upper())
    chars.append('0123456789')
    chars=''.join(chars)

    ret=[]
    for i in range(length):
        ret.append(chars[random.randint(0,len(chars)-1)])
    return ''.join(ret)