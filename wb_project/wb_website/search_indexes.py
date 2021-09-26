from haystack import indexes
 
from wb_website.models import Article
 
class ArticleIndex(indexes.SearchIndex, indexes.Indexable):
    """
    """
    # text表示被查询的字段，用户搜索的是这些字段的值，具体被索引的字段写在另一个文件里。
    text = indexes.CharField(document=True, use_template=True)#key_words
    article = indexes.CharField(model_attr='article')
    xueduan = indexes.IntegerField(model_attr='xueduan')
 
    def get_model(self):
        """返回建立索引的模型类
        """
        return Article
 
    def index_queryset(self, using=None):
        """返回要建立索引的数据查询集"""
        return self.get_model().objects.all()