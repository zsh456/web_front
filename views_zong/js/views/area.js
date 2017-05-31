$(document).ready(function(){
			//省市区数据
			var json_text = arrCity;
			(function(){
				var Pro = function(p){
					for(var i=0;i<p.length;i++){
						//打印各个省份对应列表
						var option = "<span value='" + p[i].name + "'data-i='" + i + "'>" + p[i].name + "</span>";
						$(".selProvince .box").append(option);
						$(".selProvince .box span:eq(0)").hide();
					}
					$(".selCity .current").change(function () {
						var ProId = $(".selProvince .box").attr("data-i");
						var CityId = $(".selCity .box").attr("data-j");
						var selCityValue = $(this).val();
						//让区域选项值为默认值
						$(".selArea .box").remove();
						if(p[ProId].type=="1"){
							for(var k=0;k<p[ProId].sub[CityId].sub.length;k++){
								var option = "<span value='" + p[ProId].sub[CityId].sub[k].name + "'data-k='" + k + "'>" + p[ProId].sub[CityId].sub[k].name + "</span>";
								$(".selArea").append(option);
								$(".selArea .box span:eq(0)").hide();
							}
						}
					});
				};
				Pro(json_text);
				$(".selProvince").find(".current").click(function(){
					$(".selProvince").find(".box").toggle(0);$(".selCity").find(".box").hide();$(".selArea").find(".box").hide();
				});
				$(".selCity").find(".current").click(function(){
					$(".selCity").find(".box").toggle(0);$(".selProvince").find(".box").hide();$(".selArea").find(".box").hide();
				});
				$(".selArea").find(".current").click(function(){
					$(".selArea").find(".box").toggle(0);$(".selProvince").find(".box").hide();$(".selCity").find(".box").hide();
				});
				$(".selProvince .box span").each(function(){
					$(this).click(function(){
						var p = json_text;
						var ProId = $(this).attr("data-i");
						//让城市选项值为默认值
						$(".selCity .box span").remove();
						$(".selCity .current").html("--请选择--");
						//让区域选项值为默认值
						$(".selArea .box span").remove();
						$(".selArea .current").html("--请选择--");
						$(".selProvince").find(".box").hide();
						$(".selProvince").find(".current").html($(this).html());

						var selValue = $(this).html();
						for (var i = 0; i < p.length; i++) {
							if (selValue == p[i].name) {
								for (var j = 0; j < p[i].sub.length; j++) {
									//打印各个省份对应城市列表
									var option = "<span value='" + p[i].sub[j].name + "'data-j='" + j + "'>" + p[i].sub[j].name + "</span>";
									$(".selCity .box").append(option);
									$(".selCity .box span:eq(0)").hide();
								}
							}
						}
						$(".selCity .box span").each(function(){
							$(this).click(function(){
								//让区域选项值为默认值
								$(".selArea .box span").remove();
								$(".selArea .current").html("--请选择--");
								var p = json_text;
								$(".selCity").find(".box").hide();
								$(".selCity").find(".current").html($(this).html());
								var CityId = $(this).attr("data-j");
								var selCityValue = $(this).html();
								//让区域选项值为默认值
								if(p[ProId].type=="1"){
									for(var k=0;k<p[ProId].sub[CityId].sub.length;k++){
										var option = "<span value='" + p[ProId].sub[CityId].sub[k].name + "'data-k='" + k + "'>" + p[ProId].sub[CityId].sub[k].name + "</span>";
										$(".selArea .box").append(option);
										$(".selArea .box span:eq(0)").hide();
									}
								}
								$(".selArea .box span").click(function(){
									$(".selArea .box").hide();
									$(".selArea .current").html($(this).html());
								});
							})
						});
					});
				});
		})()
	});