from django.views import generic
from django.http import HttpResponse


# Create your views here.


class IndexView(generic.TemplateView):
    template_name = 'cookies/index.html'

    # def get(self, request, *args, **kwargs):
    #     value = self.request.COOKIES.get('ie_cookie')
    #     print('value', value)
    #     if value is None:
    #         # Cookie is not set
    #         HttpResponse.set_cookie(
    #             self,
    #             'ie_cookie',
    #             max_age=31556952
    #         )
    #         print('value', value)
    #     try:
    #         value = self.request.COOKIES.get('ie_cookie')
    #         print('value', value)
    #     except KeyError:
    #         # Cookie is not set
    #         print('error')
