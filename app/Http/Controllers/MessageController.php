<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;
use App\Models\Message;
use Illuminate\Support\Facades\Session;

class MessageController extends Controller {
    public function getMessageList(){
        $message_list=Message::orderBy("id","asc")->get();
        if(count($message_list)==0){
            return Response::json(array("empty"=>1));
        }else{
            return Response::json(array("empty"=>0,"data"=>$message_list));
        }
    }
}