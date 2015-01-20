# -*- coding: utf-8 -*-

from uuid import uuid4
from framework import DoubanClientTestBase, main

class TestApiBook(DoubanClientTestBase):
    def setUp(self):
        super(TestApiBook, self).setUp()
        self.user_id = '40774605'
        self.book_id = '1126080'
        self.review_id = '1084441'
        self.isbn = '9787540457297'

    def test_get_book(self):
        ret = self.client.book.get(self.book_id)

        self.assertTrue(isinstance(ret, dict))
        self.assertTrue('author' in ret)
        self.assertTrue('title' in ret)
        self.assertTrue('summary' in ret)

    def test_get_book_by_isbn(self):
        ret= self.client.book.isbn(self.isbn)

        self.assertTrue(isinstance(ret, dict))
        self.assertTrue('author' in ret)
        self.assertTrue('title' in ret)
        self.assertTrue('summary' in ret)

    def test_search_book(self):
        ret = self.client.book.search('坦白')

        self.assertTrue(isinstance(ret, dict))
        self.assertTrue(isinstance(ret['books'], list))
        self.assertTrue('start' in ret)
        self.assertTrue('count' in ret)
        self.assertTrue('total' in ret)

    # def test_book_reviews(self):
    #     ret = self.client.book.reviews(self.book_id)

    #     self.assertTrue(isinstance(ret, dict))
    #     self.assertTrue(isinstance(ret['reviews'], list))
    #     self.assertTrue('start' in ret)
    #     self.assertTrue('count' in ret)
    #     self.assertTrue('total' in ret)

    def test_book_tags(self):
        ret = self.client.book.tags(self.book_id)

        self.assertTrue(isinstance(ret, dict))
        self.assertTrue(isinstance(ret['tags'], list))
        self.assertTrue('start' in ret)
        self.assertTrue('count' in ret)
        self.assertTrue('total' in ret)

    def test_get_book_tagged_list(self):
        ret = self.client.book.tagged_list('40774605')

        self.assertTrue(isinstance(ret, dict))
        self.assertTrue(isinstance(ret['tags'], list))
        self.assertTrue('start' in ret)
        self.assertTrue('count' in ret)
        self.assertTrue('total' in ret)

    def test_new_update_delete_review(self):

        # new
        title = content = uuid4().hex
        content = content * 10
        ret = self.client.book.review.new(self.book_id, title, content)

        self.assertTrue(isinstance(ret, dict))
        self.assertEqual(content, ret['content'])
        self.assertTrue('author' in ret)

        review_id = ret['id']

        # update
        content = content * 2
        ret = self.client.book.review.update(review_id, title, content)
        self.assertEqual(content, ret['content'])

        # delete
        ret = self.client.book.review.delete(review_id)
        self.assertEqual('OK', ret)


    # def test_get_book_review(self):
    #     ret = self.client.book.review.get(self.review_id)

    #     self.assertTrue(isinstance(ret, dict))
    #     self.assertEqual(ret['id'], self.review_id)
    #     self.assertTrue('rating' in ret)
    #     self.assertTrue('author' in ret)


if __name__ == '__main__':
    main()
