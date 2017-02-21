<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Articles;
use App\Models\Classify;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;
use App\Http\Controllers\PrintController;
use Smarty;

class ArticleController extends Controller {
    /*
      |--------------------------------------------------------------------------
      | 文章管理控制器
      |--------------------------------------------------------------------------
      |方法：
      |
      |articleCreate     文章添加
      |articleDelete  文章删除
      |articleList    文章列表
      |articleInfo    文章详情
      |articleSort    文章排序
      |articleMoveClassify 文章移动分类
      |articleBatchModify  文章批量设置
      |articleSortModify   文章顺序修改
      |articleBatchAdd   文章批量添加
      |articleTitleModify   文章标题修改
     */

    public function articleAdd() {
//            var_dump(ltrim(Input::get('img'),","));
//            exit();
        $org_imgs = array();
        $del_imgs = array();
        $id = Input::get('id');
        if ($id) {
            //修改操作
            $article = Articles::find($id);
        } else {
            //新增操作
            $article = new Articles();
        }
        $article->title = trim(Input::get('title'));
        $article->c_id = Input::get('c_id');
        $article->viewcount = Input::get('viewcount') ? Input::get('viewcount') : 0;
        $article->title_bold = Input::get('title_bold') ? 1 : 0;
        $article->title_color = Input::get('title_color') ? 1 : 0;
        $article->keywords = Input::get('keywords');
        $article->introduction = Input::get('introduction');
        $article->content = trim(Input::get('content'));
        $article->url = trim(Input::get('url'));
        $article->use_url = trim(Input::get('use_url'));
        if ($article->title == "") {
            return Response::json(array('err' => 3001, 'msg' => '标题不能为空'));
        }
        $article->img = ltrim(Input::get('img'), ",");
        $article->pc_show = Input::get("pc_show") ? Input::get("pc_show") : 0;
        $article->mobile_show = Input::get("mobile_show") ? Input::get("mobile_show") : 0;
        $pubdate = Input::get('pubdate');
        if ($pubdate) {
            $article->created_at = date('Y-m-d H:i:s', strtotime($pubdate));
        }
        $result = $article->save();
        if ($result) {
            $return_msg = array('err' => 0, 'msg' => '', 'data' => array($article->id));
        } else {
            $return_msg = array('err' => 3001, 'msg' => '文章添加失败');
        }
        return Response::json($return_msg);
    }

    public function articleDelete() {
        $ids = explode(',', Input::get('id'));
        if (count($ids) > 1) {
            //执行批量删除
            $failed = 0;
            foreach ($ids as $id) {
                $article = Articles::find($id);
                $result = Articles::where('id', '=', $id)->delete();
                if (!$result) {
                    $failed++;
                }
            }
            if ($failed) {
                $return_msg = array('err' => 3001, 'msg' => $failed . '条记录删除失败');
            } else {
                $return_msg = array('err' => 0, 'msg' => '');
            }
        } else {
            //单条删除
            $article = Articles::find($ids[0]);
            $result = Articles::where('id', '=', $ids[0])->delete();
            if ($result) {
                $return_msg = array('err' => 0, 'msg' => '');
            } else {
                $return_msg = array('err' => 3001, 'msg' => '文章删除失败');
            }
        }
        return Response::json($return_msg);
    }

    public function articleManage() {
        $data = [];
        $classify = new Classify;
        $data['catlist'] = $classify->classifyList();
        $per_page = Input::has('per_page') ? Input::get('per_page') : 15;
        $c_id = Input::has('c_id') ? Input::get('c_id') : 0;
        $is_star = Input::has('is_star') ? Input::get('is_star') : 0;
        $data['aticlelist'] = $this->articleListData($c_id, $is_star, $per_page);
        return Response::json(['err' => 0, 'msg' => '', 'data' => $data]);
    }

    public function articleSortModify() {
        $id = Input::get('id');
        $sort = Input::get('sort');
        $result = Articles::where('id', $id)->update(['sort' => $sort]);
        if ($result) {
            return Response::json(['err' => 0, 'msg' => '修改成功']);
        } else {
            return Response::json(['err' => 3001, 'msg' => '修改失败']);
        }
    }

    public function articleTitleModify() {
        $id = Input::get('id');
        $title = Input::get('title');
        $result = Articles::where('id', $id)->update(['title' => $title]);
        if ($result) {
            return Response::json(['err' => 0, 'msg' => '修改成功']);
        } else {
            return Response::json(['err' => 3001, 'msg' => '修改失败']);
        }
    }

    public function articleList() {
        $c_id = Input::has('c_id') ? Input::get('c_id') : 0;
        $per_page = Input::has('per_page') ? Input::get('per_page') : 15;
        $is_star = Input::has('is_star') ? Input::get('is_star') : 0;
        $data = $this->articleListData($c_id, $is_star, $per_page);
        if ($data != NULL) {
            return Response::json(['err' => 0, 'msg' => '', 'data' => $data]);
        } else {
            return Response::json(['err' => 3001, 'msg' => '不存在文章', 'data' => '']);
        }
    }

    public function articleListData($c_id = 0, $is_star = 0, $per_page = 15) {
        if ($c_id) {
            $c_ids = explode(',', $this->getChirldenCid($c_id));
            if ($is_star) {
                $article_list = Articles::whereIn('c_id', $c_ids)->where('is_star', '=', $is_star)->orderBy('is_top', 'DESC')->orderBy('sort', 'ASC')->orderBy('created_at', 'DESC')->paginate($per_page);
            } else {
                $article_list = Articles::whereIn('c_id', $c_ids)->orderBy('is_top', 'DESC')->orderBy('sort', 'ASC')->orderBy('created_at', 'DESC')->paginate($per_page);
            }
        } else {
            if ($is_star) {
                $article_list = Articles::where('is_star', '=', $is_star)->orderBy('is_top', 'DESC')->orderBy('sort', 'ASC')->orderBy('created_at', 'DESC')->paginate($per_page);
            } else {
                $article_list = Articles::orderBy('is_top', 'DESC')->orderBy('sort', 'ASC')->orderBy('created_at', 'DESC')->paginate($per_page);
            }
        }
        $article_arr = $article_list->toArray();
        if (count($article_arr['data'])) {
            foreach ($article_arr['data'] as $k => $v) {
                $article_arr['data'][$k]['c_name'] = Classify::where('id', $v['c_id'])->pluck('name');
                $article_arr['data'][$k]['img'] = explode(",", $v['img']);
            }
            return $article_arr;
        }
    }

    public function articleInfo() {
        $id = Input::get('id');
        $article = Articles::find($id);
        if ($article) {
            if ($article->img != '') {
                $article->img = explode(",", $article->img);
            }
//                        var_dump($article->img);exit();
            $return_msg = array('err' => 0, 'msg' => '', 'data' => $article->toArray());
        } else {
            $return_msg = array('err' => 3001, 'msg' => '该文章不存在');
        }
        return Response::json($return_msg);
    }

    public function articleSort() {
        $id = Input::get('id');
        $s_type = Input::get('s_type');
        if ($s_type == 'up') {
            $now_article = Articles::find($id);
            $now_sort = $now_article->sort;
            $search_article = Articles::where('sort', '<', $now_sort)->orderBy('sort', 'desc')->first()->toArray();
            if ($search_article === NULL) {
                $return_msg = array('err' => 3001, 'msg' => '已是最小序号');
            } else {
                $now_article->sort = $search_article['sort'];
                $up_rst = $now_article->save();
                if ($up_rst) {
                    $up_rst = Articles::where('id', '=', $search_article['id'])->update(array('sort' => $now_sort));
                    if ($up_rst) {
                        $return_msg = array('err' => 0, 'msg' => '');
                    } else {
                        $now_article->sort = $now_sort;
                        $up_rst = $now_article->save();
                        $i = 1;
                        while (!$up_rst && $i <= 3) {
                            $up_rst = $now_article->save();
                            $i++;
                        }
                        $return_msg = array('err' => 3001, 'msg' => '排序失败');
                    }
                }
            }
        } else {
            $now_article = Articles::find($id);
            $now_sort = $now_article->sort;
            $search_article = Articles::where('sort', '>', $now_sort)->first()->toArray();
            if ($search_article === NULL) {
                $return_msg = array('err' => 3001, 'msg' => '已是最大序号');
            } else {
                $now_article->sort = $search_article['sort'];
                $up_rst = $now_article->save();
                if ($up_rst) {
                    $up_rst = Articles::where('id', '=', $search_article['id'])->update(array('sort' => $now_sort));
                    if ($up_rst) {
                        $return_msg = array('err' => 0, 'msg' => '');
                    } else {
                        $now_article->sort = $now_sort;
                        $up_rst = $now_article->save();
                        $i = 1;
                        while (!$up_rst && $i <= 3) {
                            $up_rst = $now_article->save();
                            $i++;
                        }
                        $return_msg = array('err' => 3001, 'msg' => '排序失败');
                    }
                }
            }
        }
        return Response::json($return_msg);
    }

    public function articleMoveClassify() {
        $ids = explode(',', Input::get('id'));
        $c_id = Input::get('target_catid');
        $data = array();
        $err = false;
        $c_c_id = Classify::where('p_id', $c_id)->pluck('id');
        if ($c_c_id) {
            $return_msg = array('err' => 3001, 'msg' => '移动失败,节点栏目不能存在文章', 'data' => array());
        } else {
            if (count($ids) > 1) {
                foreach ($ids as $id) {
                    $article = Articles::find($id);
                    $article->c_id = $c_id;
                    $result = $article->save();
                    if ($result) {
                        $data[] = $id;
                    } else {
                        $err = true;
                    }
                }
                if ($err) {
                    $return_msg = array('err' => 3001, 'msg' => '部分移动失败', 'data' => $data);
                } else {
                    $return_msg = array('err' => 0, 'msg' => '');
                }
            } else {
                $article = Articles::find($ids[0]);
                $article->c_id = $c_id;
                $result = $article->save();
                if ($result) {
                    $return_msg = array('err' => 0, 'msg' => '');
                } else {
                    $return_mag = array('err' => 3001, 'msg' => '移动失败');
                }
            }
        }
        return Response::json($return_msg);
    }

    public function articleBatchModify() {
        $ids = explode(',', Input::get('id'));
        $action = Input::get('action');
        $value = Input::get('values');
        $relation = array(
            'set_star' => 'is_star',
            'set_top' => 'is_top',
            'set_pcshow' => 'pc_show',
            'set_mobileshow' => 'mobile_show',
            'set_wechatshow' => 'wechat_show'
        );
        if (count($ids) > 1) {
            $data = array();
            $err = false;
            foreach ($ids as $id) {
                $article = Articles::find($id);
                $article->$relation[$action] = $value;
                $result = $article->save();
                if ($result) {
                    $data[] = $id;
                } else {
                    $err = true;
                }
            }
            if ($err) {
                $return_msg = array('err' => 3001, 'msg' => '部分变更失败', 'data' => $data);
            } else {
                $return_msg = array('err' => 0, 'msg' => '');
            }
        } else {
            $article = Articles::find($ids[0]);
            $article->$relation[$action] = $value;
            $result = $article->save();
            if ($result) {
                $return_msg = array('err' => 0, 'msg' => '');
            } else {
                $return_mag = array('err' => 3001, 'msg' => '变更失败');
            }
        }
        return Response::json($return_msg);
    }

    public function articleBatchAdd() {
        $ArticleArray = Input::get('ArticleBatch');
        $c_id = Input::get('c_id');
        $pc_show = Input::get('pc_show');
        $mobile_show = Input::get('mobile_show');
        foreach ($ArticleArray as $Article) {
            $article = new Articles();
            $article->c_id = $c_id;
            $article->pc_show = $pc_show;
            $article->mobile_show = $mobile_show;
            $article->is_top = ' ';
            $article->is_star = ' ';
            $article->is_star = ' ';
            $article->sort = 1000000;
            $article->title = $Article['title'];
            $article->img = $Article['img'];
            $ret = $article->save();
            if (!$ret) {
                $return_mag = array('err' => 3001, 'msg' => '添加失败');
                return Response::json($return_msg);
            }
        }
        $return_msg = array('err' => 0, 'msg' => '');
        return Response::json($return_msg);
    }

    /**
     * 根据栏目id，获取包含其本身的栏目id串
     *
     * @param int $cid 栏目
     * @return string 以“,”分割的栏目id串
     */
    public function getChirldenCid($cid = 0, $show = null) {
        $result = $cid;
        if ($show == null) {
            $cids = Classify::where('p_id', $cid)->OrderBy('sort', 'asc')->lists('id');
        } else {
            $cids = Classify::where('p_id', $cid)->where($this->type . '_show', $show)->OrderBy('sort', 'asc')->lists('id');
        }
        if (!empty($cids)&&count((array)$cids)>0) {
            foreach ($cids as $v) {
                $result.= ',' . $this->getChirldenCid($v, $show);
            }
        }
        return $result;
    }

    /**
     * 前台显示接口函数
     */
    public function getArticleInfo($id) {
        $article = Articles::find($id);
        if ($article) {
            if ($article->img != '') {
                $article->img = explode(",", $article->img);
            }
            $return_msg =  $article->toArray();
        } else {
            $return_msg = array();
        }
        return $return_msg;
    }

    public function getArticleList($c_id=0,$per_page=15,$is_star=0,$page=1) {
        $start=($page-1)*$per_page;
        if ($c_id) {
            $c_ids = explode(',', $this->getChirldenCid($c_id));
            if ($is_star) {
                $count=Articles::whereIn('c_id', $c_ids)->where('is_star', '=', $is_star)->count();
                $article_list = Articles::whereIn('c_id', $c_ids)->where('is_star', '=', $is_star)->orderBy('is_top', 'DESC')->orderBy('sort', 'ASC')->orderBy('created_at', 'DESC')->skip($start)->take($per_page)->get();
            } else {
                $count=Articles::whereIn('c_id', $c_ids)->count();
                $article_list = Articles::whereIn('c_id', $c_ids)->orderBy('is_top', 'DESC')->orderBy('sort', 'ASC')->orderBy('created_at', 'DESC')->skip($start)->take($per_page)->get();
            }
        } else {
            if ($is_star) {
                $count=Articles::where('is_star', '=', $is_star)->count();
                $article_list = Articles::where('is_star', '=', $is_star)->orderBy('is_top', 'DESC')->orderBy('sort', 'ASC')->orderBy('created_at', 'DESC')->skip($start)->take($per_page)->get();
            } else {
                $count=Articles::count();
                $article_list = Articles::orderBy('is_top', 'DESC')->orderBy('sort', 'ASC')->orderBy('created_at', 'DESC')->skip($start)->take($per_page)->get();
            }
        }
        $article_arr['data'] = $article_list->toArray();
        $article_arr["current_page"]=$page;
        $article_arr["last_page"]=  ceil($count/$per_page);
        $article_arr["from"]=1;
        $article_arr["total"]=$count;
        if (count($article_arr['data'])) {
            foreach ($article_arr['data'] as $k => $v) {
                $article_arr['data'][$k]['c_name'] = Classify::where('id', $v['c_id'])->pluck('name');
                $article_arr['data'][$k]['img'] = explode(",", $v['img']);
            }
            $data= $article_arr;
        }
        if ($data != NULL) {
            return $data;
        } else {
            return null;
        }
    }
    /**
     * 文章显示
     */
    public function display($id){
        $page="article.html";
        $article = Articles::find($id)->toArray();
        $result=array();
        $print_control=new PrintController();
        $result=$print_control->getinfo($page);
        $result["article"]=$article;
        if(Input::has("getjson")&&Input::get("getjson")){
            $result["tpl_page"]='content-news.html';
            return Response::json($result);
        }
        $smarty = new Smarty;
        $smarty->setCompileDir(resource_path('views/cache'));
        $smarty->setTemplateDir(resource_path('views'));
        $smarty->caching=false;
//        $smarty->registerPlugin('function', 'mapExt', array('PrintController', 'createMap'));
//        $smarty->registerPlugin('function', 'shareExt', array('PrintController', 'createShare'));
        $smarty->assign($result);
        $smarty->display('content-news.html');
    }
}

?>
