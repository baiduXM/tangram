<?php 
Route::any('addmodule', ['middleware' => 'auth','uses' => 'ModuleController@addModule',]);
Route::get('deletemodule', ['middleware' => 'auth','uses' => 'ModuleController@deleteModule',]);
Route::get('getmodule', ['middleware' => 'auth', 'uses' => 'ModuleController@getModule',]);
Route::get('moduleinfo', ['middleware' => 'auth','uses' => 'ModuleController@ModuleInfo',]);
Route::post('openmodule', ['middleware' => 'auth','uses' => 'ModuleController@OpenModule',]);
Route::post('login-post', ['as' => 'login-post','uses' => 'SignController@loginPost']);
Route::post('modify-password', ['as' => 'modify-password','uses' => 'SignController@modifyPassword']);
Route::get('logout', ['middleware' => 'auth','uses' => 'SignController@logOut']);
Route::post('is_login', ['as' => 'is_login','uses' => 'SignController@isLogin']);
Route::post('customerInfo', ['middleware' => 'auth','uses' => 'CustomerController@customerInfo',]);
Route::post('upgrade_module', ['middleware' => 'auth','uses' => 'ModuleController@upgrade_module']);
Route::get('clearcache', ['middleware' => 'auth','uses' => 'SignController@clearCache']);
Route::post('upload-setting',['as' => 'upload-setting','middleware' => 'auth','uses' => 'UploadController@setting']);//上传设置
Route::post('upload-image',['as' => 'upload-image','middleware' => 'auth','uses' => 'UploadController@imgUpload']);//上传图片
Route::post('upload-file',['as' => 'upload-file','middleware' => 'auth','uses' => 'UploadController@fileUpload']);//上传文件
Route::post('page-setting',['as' => 'page-setting','middleware' => 'auth','uses' => 'PrintController@setting']);//设置
Route::post('page-info-setting',['as' => 'page-info-setting','middleware' => 'auth','uses' => 'PrintController@info_setting']);//页面设置
Route::get('index.html', ['uses' => 'PrintController@print_index']);
Route::get('/', ['uses' => 'PrintController@print_index']);//首页显示
Route::get('printjson', ['uses' => 'PrintController@output_json']);
Route::post('classify-create', ['as' => 'classify-list','middleware' => 'auth','uses' => 'ClassifyController@classifyCreate']);//栏目添加
Route::get('classify-list', ['as' => 'classify-list','middleware' => 'auth','uses' => 'ClassifyController@classifyList']);//栏目列表
Route::post('classify-delete', [ 'as' => 'classify-list','middleware' => 'auth','uses' => 'ClassifyController@classifyDelete']);//栏目删除
Route::get('classify-info', ['as' => 'classify-list','middleware' => 'auth','uses' => 'ClassifyController@classifyInfo']);//栏目详情
Route::post('classify-modify', [ 'as' => 'classify-list','middleware' => 'auth', 'uses' => 'ClassifyController@classifyModify']);//栏目修改
Route::post('classify-name-modify', ['as' => 'classify-name-modify','middleware' => 'auth','uses' => 'ClassifyController@classifyNameModify']);//栏目标题修改
Route::post('classify-show', [ 'as' => 'classify-show','middleware' => 'auth', 'uses' => 'ClassifyController@classifyShow']);//栏目显隐
Route::post('classify-sort', ['as' => 'classify-list','middleware' => 'auth','uses' => 'ClassifyController@classifySort']);//栏目排序
Route::get('classify/{id}.html', ['uses' => 'ClassifyController@display']);
Route::post('article-create', ['as' => 'article-list','middleware' => 'auth','uses' => 'ArticleController@articleAdd']);//文章添加
Route::get('article-list', ['as' => 'article-list','middleware' => 'auth','uses' => 'ArticleController@articleList']);//文章列表
Route::get('article-manage', ['as' => 'article-list','middleware' => 'auth','uses' => 'ArticleController@articleManage']);//文章列表
Route::get('article-info', ['as' => 'article-list','middleware' => 'auth','uses' => 'ArticleController@articleInfo']);//文章详情
Route::post('article-delete', ['as' => 'article-list','middleware' => 'auth','uses' => 'ArticleController@articleDelete']);//文章删除
Route::post('article-sort-modify', ['as' => 'article-sort-modify','middleware' => 'auth','uses' => 'ArticleController@articleSortModify']);//文章排序修改
Route::post('article-title-modify', ['as' => 'article-title-modify','middleware' => 'auth', 'uses' => 'ArticleController@articleTitleModify']);//文章标题修改
Route::post('article-sort', ['as' => 'article-list','middleware' => 'auth','uses' => 'ArticleController@articleSort']);//文章排序
Route::post('article-move-classify', ['as' => 'article-list','middleware' => 'auth','uses' => 'ArticleController@articleMoveClassify']);//文章显示改变
Route::post('article-batch-modify', ['as' => 'article-list','middleware' => 'auth', 'uses' => 'ArticleController@articleBatchModify']);//文章批量设置
Route::post('article-batch-add', ['as' => 'article-batch-add','middleware' => 'auth','uses' => 'ArticleController@articleBatchAdd']);//文章批量添加
Route::get('article/{id}.html', ['uses' => 'ArticleController@display']);//显示界面
Route::get('get-message-list',['as' => 'get-member-list','middleware' => 'auth','uses' => 'MessageController@getMessageList']);//获取留言列表
