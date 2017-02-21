<?php

function getinfo_imgs($data) {
    foreach($data->data as &$v){
        $v=(array)$v;
    }
    return (array)($data->data);
}

function getinfo_img($data) {
    return (array)$data->data;
}

function getinfo_text($data) {
    return $data->data;
}

function getinfo_textarea($data) {
    return $data->data;
}
function default_url(){
    return array(array("file"=>"index","dir"=>"/"));
}