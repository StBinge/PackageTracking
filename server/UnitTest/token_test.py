from unittest import TestCase,main
# from help import create_random_str,random

import pathlib,datetime
import sys
sys.path.append(str(pathlib.Path(__file__).absolute().parent.parent))
import Databse.Token as Token
import Databse.UserDB as UserDB

class TokenTest(TestCase):
    def test_token_validation(self):
        tokens=Token.get_all_tokens()
        if not tokens:
            self.test_add_token()
        for token in Token.get_all_tokens():
            time=datetime.datetime.fromtimestamp(token.timestamp)
            token.timestamp=(time-datetime.timedelta(1)).timestamp()
            self.assertFalse(token.is_valid(),token)
            break

    def test_add_token(self):
        for user in UserDB.get_all_users():
            tid=Token.add_token(user.id)
            self.assertTrue(tid>=0,tid)
            token=Token.get_token_by_id(tid)
            self.assertTrue(token and token.is_valid(),token)
            break

if __name__ == '__main__':
    main()