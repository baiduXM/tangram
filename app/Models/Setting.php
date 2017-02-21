<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


/**
 * 设置数据模型
 *
 * @author 12t
 */
class Setting extends Model{
    protected $table="setting";
    public $timestamps=false;
}
