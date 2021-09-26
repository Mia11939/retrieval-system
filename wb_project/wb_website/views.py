from django.core.paginator import Paginator

from wb_project import settings
from . import models
from django.shortcuts import render, redirect
import json
from .theme_anaylse import *
from .models import Article

# Create your views here.

def bg(request):
    # 定义展示函数
    return render(request, 'index.html',locals())

from haystack.views import SearchView
from .models import *

degree = 1
a_result = 'testtest'

def result(request):
    global degree
    if request.method == 'POST':
        post_data = json.loads(request.body)
        degree = post_data.get("label")  # 对应的id
        print(degree)
        return render(request, 'search/search.html', locals())
    else:
        return render(request, 'search/search.html', locals())

def index(request):
    return render(request, 'index.html', locals())

def start(request):
    return render(request, 'search_start.html', locals())

def results(request):
    return render(request, 'results.html', locals())

def them(request):
    if request.method == 'POST':
        content = request.POST.get('query', None)
        final = AutoSummarization(content)
        key = KeywordsExtraction(content)
        keyword = []
        for i in range(3):
            keyword.append(key[i]["Word"])
        return render(request, 'results.html', locals())
    else:
        return render(request, 'results.html', locals())

class MySeachView(SearchView):
    def extra_context(self):  # 重载extra_context来添加额外的context内容

        context = super(MySeachView, self).extra_context()
        # form表单提交的参数可以通过以下方式获取

        side_list = Article.objects.all()
        print(degree)
        context['side_list'] = side_list
        context['degree'] = int(degree)
        context['a_result'] = a_result
        return context