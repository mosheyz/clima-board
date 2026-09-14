
def atbash_maker(text):
    new_text = ""
    for c in text:
        new_text += chars_atbash(c)
    return new_text

def chars_atbash(char):
    if str(char).isalpha() and len(char) == 1:
        if 65 <= ord(char) <= 90:
            return chr(155 - ord(char))
        elif 97 <= ord(char) <= 122:
            return chr(219 - ord(char))
        elif 1488 <= ord(char) <= 1514:
            return chr(3002 - ord(char))
    else:
        return char