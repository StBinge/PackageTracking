import Databse.UserDB as UserDB
from unittest import TestCase, main
from help import create_random_str, random

import pathlib
import sys
sys.path.append(str(pathlib.Path(__file__).absolute().parent.parent))


class TestUserDB(TestCase):
    def test_add(self):
        name = create_random_str(random.randint(5, 8))
        psd = create_random_str(random.randint(12, 20))
        nick = create_random_str(random.randint(10, 12))
        id = UserDB.add_user(name, psd, nick)
        user = UserDB.get_user_by_id(id)
        self.assertTrue(name == user.name and psd ==
                        user.password and nick == user.realname)

    def test_add_exits(self):
        for user in UserDB.get_all_users():
            id = UserDB.add_user(user.name, user.password, user.realname)
            self.assertEqual(id, -1)

    def test_validate_user(self):
        for user in UserDB.get_all_users():
            ret = UserDB.validate_user(user.name, user.password)
            self.assertTrue(ret)
            ret = UserDB.validate_user(user.name, user.password[1:])
            self.assertFalse(ret)


if __name__ == '__main__':
    main()
