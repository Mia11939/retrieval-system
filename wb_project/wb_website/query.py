from elasticsearch_dsl import Text, Keyword, Integer

# 指定与哪些服务器连接
from elasticsearch_dsl.connections import connections
connections.create_connection(hosts=['localhost'])

# 定义类型
class ZhType():
    """
    中文文章类型
    """
    article = Text(analyzer='ik_max_word')
    level = Integer(analyzer='ik_max_word')
    url = Keyword()

    class Meta:
        index = 'article_index'



if __name__ == '__main__':
    # 执行init方法，会创建对应的索引和类型
    ZhType.init()
