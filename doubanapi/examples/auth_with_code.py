from six.moves import input
from douban_client import DoubanClient

KEY = '024bc3dce58d1ebb06e34b96b0a75c31'
SECRET = 'f75a87e4fb09e6d6'
CALLBACK = 'http://students.washington.edu/ryzhou/doubanapi/doubancallback.html'

SCOPE = 'douban_basic_common,community_basic_user'
client = DoubanClient(KEY, SECRET, CALLBACK, SCOPE)

print client.authorize_url
code = input('Enter the verification code:')

client.auth_with_code(code)
print client.user.me
