# -*- coding: utf8 -*-
import base64
import hashlib
import hmac
import time

import requests

secret_id = "AKIDub4KLI3ZqreEZgZDkxwhDVYMuCF2Zrvk"
secret_key = "d1B7oGVM5hx3ye6JH0TlpfGckdHgrpZ4"

def get_string_to_sign(method, endpoint, params):
    s = method + endpoint + "/?"
    query_str = "&".join("%s=%s" % (k, params[k]) for k in sorted(params))
    return s + query_str

def sign_str(key, s, method):
    hmac_str = hmac.new(key.encode("utf8"), s.encode("utf8"), method).digest()
    return base64.b64encode(hmac_str)



def AutoSummarization(text_str):
    endpoint = "nlp.tencentcloudapi.com"
    data = {
        'Action' : 'AutoSummarization',
        'Nonce' : 11886,
        'Region' : 'ap-guangzhou',
        'SecretId' : secret_id,
        'Timestamp' : int(time.time()),
        'Version': '2019-04-08',
    }
    data['Text'] = text_str
    data['Length'] = 50
    s = get_string_to_sign("GET", endpoint, data)
    data["Signature"] = sign_str(secret_key, s, hashlib.sha1)

    resp = requests.get("https://" + endpoint, params=data)
    return(eval(resp.text)["Response"]["Summary"])

def KeywordsExtraction(text_str):
    endpoint = "nlp.tencentcloudapi.com"
    data = {
        'Action' : 'KeywordsExtraction',
        'Nonce' : 11886,
        'Region' : 'ap-guangzhou',
        'SecretId' : secret_id,
        'Timestamp' : int(time.time()),
        'Version': '2019-04-08',
    }
    data['Text'] = text_str
    data['Num'] = 3
    s = get_string_to_sign("GET", endpoint, data)
    data["Signature"] = sign_str(secret_key, s, hashlib.sha1)

    resp = requests.get("https://" + endpoint, params=data)
    return(eval(resp.text)["Response"]["Keywords"])


if __name__ == '__main__':
    text_str = '我在小学时就知道黄果树瀑布。那时老师在提到祖国的大好河山时总是要提到黄果树瀑布。但我看到黄果树的图片并不会特别地激动，这和看到祖国的长白山、祖国的大兴安岭、祖国的南海这些图片的感觉差不多。风景化的图片使我仅仅把黄果树看成风景之一，这风景是没有空间、质量、空气和细节的，它们仅仅是祖国的骄傲这一概念的所指。我在小学时就知道黄果树瀑布。那时老师在提到祖国的大好河山时总是要提到黄果树瀑布。但我看到黄果树的图片并不会特别地激动，这和看到祖国的长白山、祖国的大兴安岭、祖国的南海这些图片的感觉差不多。风景化的图片使我仅仅把黄果树看成风景之一，这风景是没有空间、质量、空气和细节的，它们仅仅是祖国的骄傲这一概念的所指。去年六月，我到了黄果树瀑布。入口就是那些图片被拍摄的地点，在这里看黄果树，和图片告诉我们的别无二致。确实是雄伟、壮丽，确实是万马奔腾。不由自主差一点就脱口而出的正是那句老话：哦，祖国的大好河山！周围到处是卖旅游纪念品的，这些纪念品和拍风景照片的方法一样，也是按照某种“旅游纪念品”的统一风格制作的，根本激发不起我的收藏欲。我不由地生出一种在旅游点必产生的那种似曾相识的无聊感。去年六月，我到了黄果树瀑布。入口就是那些图片被拍摄的地点，在这里看黄果树，和图片告诉我们的别无二致。确实是雄伟、壮丽，确实是万马奔腾。不由自主差一点就脱口而出的正是那句老话：哦，祖国的大好河山！周围到处是卖旅游纪念品的，这些纪念品和拍风景照片的方法一样，也是按照某种“旅游纪念品”的统一风格制作的，根本激发不起我的收藏欲。我不由地生出一种在旅游点必产生的那种似曾相识的无聊感。但那时我猛然间听见了瀑布的声音，当时我心里一阵激动，黄果树瀑布原来是有声音的。这声音即刻改变了我对黄果树瀑布这一名词的成见，我立即就明白我抵达了一个与我在图片上所知道的那个黄果树瀑布毫不相干的地方。它提供的东西不是什么形而上的雄伟、壮丽、而是声音。'
    print(AutoSummarization(text_str))
