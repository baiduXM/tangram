<?php
namespace App\Http\Controllers;
use Illuminate\Routing\Controller;
use App\Models\Setting;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;
class UploadController extends Controller {
    public function setting(){
        if(Input::get("do")=="get"){
            $setting=Setting::where("module","upload")->first();
            if($setting==null||$setting->value==""||$setting->value==null){
                return Response::json(array("empty"=>1));
            }else{
                return Response::json(array("empty"=>0,"data"=>json_decode($setting->value)));
            }
        }
        if(Input::get("do")=="modify"){
            $setting=Setting::where("module","upload")->first();
            if($setting==null){
                $setting=new Setting;
                $setting->module="upload";
            }
            $setting->value=  json_encode(Input::get("value"));
            $setting->save();
            return Response::json(array("msg"=>"保存成功！","err"=>0));
        }
    }
    public function imgUpload(){
        $imgs=Input::file();
        $setting=Setting::where("module","upload")->first();
        if($setting==null){
            return Response::json(array("msg"=>"请先对上传模块进行配置！","err"=>1));
        }else{
            $setval=  json_decode($setting->value);
            if($setval->imgdir==""||$setval->imgmaxsize==''){
                return Response::json(array("msg"=>"请先对上传模块进行配置！","err"=>1));
            }
            $ret=array();
            $num=0;
            foreach($imgs as $key=>$img){
                $num++;
                if($img->isValid()){
                    if($img->getClientSize()>($setval->imgmaxsize*1024)){
                        $ret[]=array("msg"=>"第{$num}张图片太大！","err"=>1);
                    }else{
                        $type = $img->getClientOriginalExtension();
                        $fileName = time() . str_random(4) . '.' . $type;
                        $img->move(public_path($setval->imgdir),$fileName);
                        $ret[]=array("msg"=>"上传成功！","err"=>0,"url"=>$setval->imgdir.$fileName);
//                        return Response::json(array("msg"=>"上传成功！","err"=>0,"url"=>$setval->imgdir.$fileName));
                    }
                }else{
                    $ret[]=array("msg"=>"第{$num}张上传失败！","err"=>1);
//                    return Response::json(array("msg"=>"上传失败！","err"=>1));
                }
            }
            if(count($ret)==1){
                $ret[0]["length"]=1;
                return Response::json($ret[0]);
            }else{
                $ret["length"]=  count($ret);
                return Response::json($ret);
            }
        }
    }
    public function fileUpload(){
        $files=Input::file();
        $setting=Setting::where("module","upload")->first();
        if($setting==null){
            return Response::json(array("msg"=>"请先对上传模块进行配置！","err"=>1));
        }else{
            $setval=  json_decode($setting->value);
            if($setval->filedir==""||$setval->filemaxsize==''){
                return Response::json(array("msg"=>"请先对上传模块进行配置！","err"=>1));
            }
            foreach($files as $file){
                if($file->isValid()){
                    if($file->getClientSize()>($setval->filemaxsize*1024)){
                        return Response::json(array("msg"=>"文件太大！","err"=>1));
                    }else{
                        $type = $file->getClientOriginalExtension();
                        $fileName = time() . str_random(4) . '.' . $type;
                        $file->move(public_path($setval->filedir),$fileName);
                        return Response::json(array("msg"=>"上传成功！","err"=>0,"url"=>$setval->filedir.$fileName));
                    }
                }else{
                    return Response::json(array("msg"=>"上传失败！","err"=>1));
                }
            }
        }
    }
}