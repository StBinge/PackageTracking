import Databse.User as User
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
        id = User.add_user(name, psd, nick)
        user = User.get_user_by_id(id)
        self.assertTrue(name == user.name and psd ==
                        user.password and nick == user.realname)

    def test_add_exits(self):
        for user in User.get_all_users():
            id = User.add_user(user.name, user.password, user.realname)
            self.assertEqual(id, -1)

    def test_validate_user(self):
        for user in User.get_all_users():
            ret = User.validate_user(user.name, user.password)
            self.assertTrue(ret)
            ret = User.validate_user(user.name, user.password[1:])
            self.assertFalse(ret)


if __name__ == '__main__':
    main()
