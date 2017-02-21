<?php

function fun() {
    var_dump("wwwwwww");
    exit();
}

function getinfo_list($data) {
//    return $data->data;
    $classify_control = new \App\Http\Controllers\ClassifyController();
    $result = $classify_control->getChildClassifyList($data->data);
    return $result;
}
function getinfo_page($data) {
    $classify_control = new \App\Http\Controllers\ClassifyController();
    $result = $classify_control->getClassifyPage($data->data);
    return $result;
}
function getinfo_classifys($data) {
    $ids = explode(",", $data->data);
    $classify_control = new \App\Http\Controllers\ClassifyController();
    foreach ($ids as $k => $v) {
        $result[$k] = $classify_control->getChildClassifyList($v);
    }
    return $result;
}
function Classify_url(){
    $data=array();
    $classify_control = new \App\Http\Controllers\ClassifyController();
    $result = $classify_control->getAllClassifyList();
    foreach($result as $k=>$v){
        $data[$k]=array("file"=>$v["id"],"dir"=>"/classify/");
    }
    return $data;
}
