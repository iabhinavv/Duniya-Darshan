#!/usr/bin/env python3
"""Optional local server for Duniya Darshan.

    python3 serve.py     ->  http://localhost:4190/

You do not need this — open index.html and the app runs. Use it when you want an
http:// origin: photo lookups from Wikipedia are more reliable there, and it lets
you open the app on your phone over the same Wi-Fi:

    HOST=0.0.0.0 python3 serve.py
"""
import functools
import http.server
import os
import socketserver

DIR = os.path.dirname(os.path.abspath(__file__))
HOST = os.environ.get("HOST", "127.0.0.1")
PORT = int(os.environ.get("PORT", "4190"))


class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def log_message(self, fmt, *args):
        pass


socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer((HOST, PORT), functools.partial(Handler, directory=DIR)) as httpd:
    print("Duniya Darshan at http://%s:%d/   (ctrl-c to stop)" % (HOST, PORT), flush=True)
    httpd.serve_forever()
