import Databse.Package as Package
from unittest import TestCase, main
import datetime
import help

import pathlib
import sys
sys.path.append(str(pathlib.Path(__file__).absolute().parent.parent))


def create_code():
    now = datetime.datetime.now()
    return f'{now.year}{now.month:0>2d}{now.day:0>2d}{now.hour:0>2d}{now.minute:0>2d}{now.second:0>2d}{now.microsecond//1000:0>3d}'


def create_random_content():
    return help.create_random_str(help.random.randint(20, 30))


class PackageTest(TestCase):
    def test_create_code(self):
        for _ in range(10):
            code = create_code()
            self.assertTrue(len(code) == 17, code)

    def test_add(self):

        code = create_code()
        content = create_random_content()
        id = Package.add_package(code, content)
        added = Package.get_package_by_id(id)
        self.assertTrue(added and added.code ==
                        code and added.content == content, id)
        id = Package.add_package(code, content)
        self.assertTrue(id == -1, id)

    def test_post_package(self):
        packages = Package.get_all_packages()
        for pack in packages:
            state = pack.posted
            self.assertTrue(Package.add_package(pack.code), pack.id)
            self.assertTrue(Package.get_package_by_id(pack.id).posted, pack.id)
            self.assertTrue(Package.add_package(pack.code, False), pack.id)
            self.assertFalse(Package.get_package_by_id(
                pack.id).posted, pack.id)
            Package.add_package(pack.code, state)

    def test_sign_package(self):
        packages = Package.get_all_packages()
        for pack in packages:
            state = pack.signed
            self.assertTrue(Package.set_package_signed(pack.code), pack.id)
            self.assertTrue(Package.get_package_by_id(pack.id).signed, pack.id)
            self.assertTrue(Package.set_package_signed(
                pack.code, False), pack.id)
            self.assertFalse(Package.get_package_by_id(
                pack.id).signed, pack.id)
            Package.set_package_signed(pack.code, state)


if __name__ == '__main__':

    main()
