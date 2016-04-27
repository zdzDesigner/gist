function member_model(http) {
    return {

    	// 会员等级
        post_level (data) {

         	data = {
				code: 10000,
				message: "请求成功",
				result: [{
						id: "91ff485d-9eb3-42b5-a205-067fe9a2c646",
						level: 1,
						level_name: "一星会员",
						level_promotion_setting_list: [],
						privilege_setting_list: [{
							level: 1,
							remark: null,
							desc: "满100减20",
							privilege_name: "专享优惠",
							rule_type: 1,
							rule_type_value: "专享优惠",
							rule_value: "满100减20",
							discount_amount: "20.00元",
							use_condition: "全单满100元"
						}],
						expiration_days: "永久有效"
					}]
				}
           return http.post('./level_setting/list',data)
        },

        // 日志列表
        post_log_list (data) {
        	
        	data = {
				phone_number:'',
				page_size:20,
				notice_code:'',
				amount_begin:'',
				amount_end:'',
				payment_way:'',
				status:'',
				pay_time_begin:'',
				pay_time_end:'',
				merchant_id:'',
				payment_channel:'',
				current_page:1
			}
        	return http.post('./deposit/log_list',data)

        }
    }

}

module.exports = member_model


