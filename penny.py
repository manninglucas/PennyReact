#!/usr/bin/env python

#-----------------------------------------------------------------------
# penny.py
# Author: Bob Dondero and Lucas Manning
#-----------------------------------------------------------------------

from sys import argv
from database import Database
from bottle import route, request, error, template, \
    TEMPLATE_PATH, run, static_file, response
from json import dumps
import os

TEMPLATE_PATH.insert(0, '')

@route('/static/:filename#.*#')
def send_static(filename):
    return static_file(filename, root='./static')
   
@route('/')
@route('/index')
@route('/search')
def search():
    
    templateInfo = {}
    return template('search.tpl', templateInfo)
    
@route('/searchresults')
def searchResults():
    
    author = request.query.get('author')
    if (author is None) or (author.strip() == ''):
        response.content_type = 'application/json'
        return dumps([])

    database = Database()
    database.connect()
    books = database.search(author)
    database.disconnect()
    
    ret = []
    for book in books:
        ret.append(book.serialize())

    response.content_type = 'application/json'
    return dumps(ret)
    
@error(404)
def notFound(error):
    return 'Not found'
    
if __name__ == '__main__':
    if len(argv) != 2:
        print 'Usage: ' + argv[0] + ' port'
        exit(1)
    run(host='0.0.0.0', port=argv[1], debug=True)
