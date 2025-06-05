const words = [
{"word": "爱情", "pinyin": "ài qíng", "meaning": "ຄວາມຮັກ", "example": "他们的爱情很甜蜜。", "audioSrc": "audio/aiqing a.mp3", "exampleAudioSrc": "audio/爱情_b.mp3"},
{"word": "安排", "pinyin": "ān pái", "meaning": "ຈັດຕັ້ງ", "example": "老师安排了明天的考试。", "audioSrc": "audio/anpai a.mp3.mp3", "exampleAudioSrc": "audio/安排_b.mp3"},
{"word": "安全", "pinyin": "ān quán", "meaning": "ປອດໄພ", "example": "请注意安全。", "audioSrc": "audio/anquan a.mp3.mp3", "exampleAudioSrc": "audio/安全_b.mp3"},
{"word": "按时", "pinyin": "àn shí", "meaning": "ຕາມເວລາ", "example": "我们必须按时完成作业。", "audioSrc": "audio/anshi a.mp3.mp3", "exampleAudioSrc": "audio/按时_b.mp3"},
{"word": "按照", "pinyin": "àn zhào", "meaning": "ຕາມ", "example": "请按照说明书操作。", "audioSrc": "audio/anzhao a.mp3.mp3", "exampleAudioSrc": "audio/按照_b.mp3"},
{"word": "百分之", "pinyin": "bǎi fēn zhī", "meaning": "ຮ້ອຍລະອຽດ", "example": "百分之九十的学生通过了考试。", "audioSrc": "audio/baifenzhi a.mp3.mp3", "exampleAudioSrc": "audio/百分之_b.mp3"},
{"word": "棒", "pinyin": "bàng", "meaning": "ເກັ່ງ", "example": "他的表演真棒！", "audioSrc": "audio/棒_a.mp3", "exampleAudioSrc": "audio/棒_b.mp3"},
{"word": "包子", "pinyin": "bāo zi", "meaning": "ເຂົ້າໜົມປັງ", "example": "我早上吃了两个包子。", "audioSrc": "audio/包子_a.mp3", "exampleAudioSrc": "audio/包子_b.mp3"},
{"word": "保护", "pinyin": "bǎo hù", "meaning": "ປົກປ້ອງ", "example": "我们要保护环境。", "audioSrc": "audio/保护_a.mp3", "exampleAudioSrc": "audio/保护_b.mp3"},
{"word": "保证", "pinyin": "bǎo zhèng", "meaning": "ຮັບປະກັນ", "example": "我保证明天一定来。", "audioSrc": "audio/保证_a.mp3", "exampleAudioSrc": "audio/保证_b.mp3"},
{"word": "报名", "pinyin": "bào míng", "meaning": "ລົງທະບຽນ", "example": "我想报名参加比赛。", "audioSrc": "audio/报名_a.mp3", "exampleAudioSrc": "audio/报名_b.mp3"},
{"word": "抱", "pinyin": "bào", "meaning": "ກອດ", "example": "妈妈抱了抱孩子。", "audioSrc": "audio/抱_a.mp3", "exampleAudioSrc": "audio/抱_b.mp3"},
{"word": "抱歉", "pinyin": "bào qiàn", "meaning": "ຂໍໂທດ", "example": "抱歉，我来晚了。", "audioSrc": "audio/抱歉_a.mp3", "exampleAudioSrc": "audio/抱歉_b.mp3"},
{"word": "倍", "pinyin": "bèi", "meaning": "ເທົ່າ", "example": "今年的产量是去年的两倍。", "audioSrc": "audio/倍_a.mp3", "exampleAudioSrc": "audio/倍_b.mp3"},
{"word": "本来", "pinyin": "běn lái", "meaning": "ແຕ່ເດີມ", "example": "我本来想去，但没时间。", "audioSrc": "audio/本来_a.mp3", "exampleAudioSrc": "audio/本来_b.mp3"},
{"word": "笨", "pinyin": "bèn", "meaning": "ໂງ່", "example": "这只狗有点笨。", "audioSrc": "audio/笨_a.mp3", "exampleAudioSrc": "audio/笨_b.mp3"},
{"word": "比如", "pinyin": "bǐ rú", "meaning": "ຕົວຢ່າງ", "example": "比如，你可以学中文。", "audioSrc": "audio/比如_a.mp3", "exampleAudioSrc": "audio/比如_b.mp3"},
{"word": "毕业", "pinyin": "bì yè", "meaning": "ຈົບການສຶກສາ", "example": "他明年大学毕业。", "audioSrc": "audio/毕业_a.mp3", "exampleAudioSrc": "audio/毕业_b.mp3"},
{"word": "遍", "pinyin": "biàn", "meaning": "ຮອບ", "example": "这本书我读了三遍。", "audioSrc": "audio/遍_a.mp3", "exampleAudioSrc": "audio/遍_b.mp3"},
{"word": "标准", "pinyin": "biāo zhǔn", "meaning": "ມາດຕະຖານ", "example": "这个产品符合国际标准。", "audioSrc": "audio/标准_a.mp3", "exampleAudioSrc": "audio/标准_b.mp3"},
{"word": "表格", "pinyin": "biǎo gé", "meaning": "ຕາຕະລາງ", "example": "请填写这张表格。", "audioSrc": "audio/表格_a.mp3", "exampleAudioSrc": "audio/表格_b.mp3"},
{"word": "表示", "pinyin": "biǎo shì", "meaning": "ສະແດງ", "example": "他表示同意这个计划。", "audioSrc": "audio/表示_a.mp3", "exampleAudioSrc": "audio/表示_b.mp3"},
{"word": "表演", "pinyin": "biǎo yǎn", "meaning": "ສະແດງລະຄອນ", "example": "今晚有音乐表演。", "audioSrc": "audio/表演_a.mp3", "exampleAudioSrc": "audio/表演_b.mp3"},
{"word": "表扬", "pinyin": "biǎo yáng", "meaning": "ຍ້ອງຍໍ", "example": "老师表扬了优秀的学生。", "audioSrc": "audio/表扬_a.mp3", "exampleAudioSrc": "audio/表扬_b.mp3"},
{"word": "饼干", "pinyin": "bǐng gān", "meaning": "ຂະຫນົມປັງ", "example": "我喜欢吃巧克力饼干。", "audioSrc": "audio/饼干_a.mp3", "exampleAudioSrc": "audio/饼干_b.mp3"},
{"word": "并且", "pinyin": "bìng qiě", "meaning": "ແລະ", "example": "他聪明并且勤奋。", "audioSrc": "audio/并且_a.mp3", "exampleAudioSrc": "audio/并且_b.mp3"},
{"word": "博士", "pinyin": "bó shì", "meaning": "ປະລິນຍາເອກ", "example": "他是一位医学博士。", "audioSrc": "audio/博士_a.mp3", "exampleAudioSrc": "audio/博士_b.mp3"},
{"word": "不得不", "pinyin": "bù dé bù", "meaning": "ບໍ່ມີທາງເລືອກ", "example": "我不得不取消会议。", "audioSrc": "audio/不得不_a.mp3", "exampleAudioSrc": "audio/不得不_b.mp3"},
{"word": "不管", "pinyin": "bù guǎn", "meaning": "ບໍ່ວ່າ", "example": "不管多难，我都会坚持。", "audioSrc": "audio/不管_a.mp3", "exampleAudioSrc": "audio/不管_b.mp3"},
{"word": "不过", "pinyin": "bù guò", "meaning": "ແຕ່", "example": "他很累，不过还在工作。", "audioSrc": "audio/不过_a.mp3", "exampleAudioSrc": "audio/不过_b.mp3"},
{"word": "不仅", "pinyin": "bù jǐn", "meaning": "ບໍ່ພຽງແຕ່", "example": "他不仅会英语，还会法语。", "audioSrc": "audio/不仅_a.mp3", "exampleAudioSrc": "audio/不仅_b.mp3"},
{"word": "部分", "pinyin": "bù fen", "meaning": "ສ່ວນ", "example": "这只是问题的一部分。", "audioSrc": "audio/部分_a.mp3", "exampleAudioSrc": "audio/部分_b.mp3"},
{"word": "擦", "pinyin": "cā", "meaning": "ເຊັດ", "example": "请擦干净桌子。", "audioSrc": "audio/擦_a.mp3", "exampleAudioSrc": "audio/擦_b.mp3"},
{"word": "猜", "pinyin": "cāi", "meaning": "ເດົາ", "example": "你猜我买了什么？", "audioSrc": "audio/猜_a.mp3", "exampleAudioSrc": "audio/猜_b.mp3"},
{"word": "材料", "pinyin": "cái liào", "meaning": "ວັດຖຸດິບ", "example": "我们需要更多材料。", "audioSrc": "audio/材料_a.mp3", "exampleAudioSrc": "audio/材料_b.mp3"},
{"word": "参观", "pinyin": "cān guān", "meaning": "ຢ້ຽມຊົມ", "example": "明天我们去参观博物馆。", "audioSrc": "audio/参观_a.mp3", "exampleAudioSrc": "audio/参观_b.mp3"},
{"word": "餐厅", "pinyin": "cān tīng", "meaning": "ຮ້ານອາຫານ", "example": "这家餐厅的菜很好吃。", "audioSrc": "audio/餐厅_a.mp3", "exampleAudioSrc": "audio/餐厅_b.mp3"},
{"word": "厕所", "pinyin": "cè suǒ", "meaning": "ຫ້ອງນ້ຳ", "example": "请问厕所在哪里？", "audioSrc": "audio/厕所_a.mp3", "exampleAudioSrc": "audio/厕所_b.mp3"},
{"word": "差不多", "pinyin": "chà bu duō", "meaning": "ເກືອບເທົ່າກັນ", "example": "这两件衣服的价格差不多。", "audioSrc": "audio/差不多_a.mp3", "exampleAudioSrc": "audio/差不多_b.mp3"},
{"word": "长城", "pinyin": "cháng chéng", "meaning": "ກຳແພງໃຫຍ່", "example": "长城是中国的象征。", "audioSrc": "audio/长城_a.mp3", "exampleAudioSrc": "audio/长城_b.mp3"},
{"word": "长江", "pinyin": "cháng jiāng", "meaning": "ແມ່ນ້ຳແຍງຊີ", "example": "长江是中国最长的河流。", "audioSrc": "audio/长江_a.mp3", "exampleAudioSrc": "audio/长江_b.mp3"},
{"word": "尝", "pinyin": "cháng", "meaning": "ລອງ", "example": "你尝尝这个菜。", "audioSrc": "audio/尝_a.mp3", "exampleAudioSrc": "audio/尝_b.mp3"},
{"word": "场", "pinyin": "chǎng", "meaning": "ຄັ້ງ", "example": "今天有一场足球比赛。", "audioSrc": "audio/场_a.mp3", "exampleAudioSrc": "audio/场_b.mp3"},
{"word": "超过", "pinyin": "chāo guò", "meaning": "ເກີນ", "example": "他的成绩超过了所有人。", "audioSrc": "audio/超过_a.mp3", "exampleAudioSrc": "audio/超过_b.mp3"},
{"word": "成功", "pinyin": "chéng gōng", "meaning": "ສຳເລັດ", "example": "他终于成功了。", "audioSrc": "audio/成功_a.mp3", "exampleAudioSrc": "audio/成功_b.mp3"},
{"word": "成为", "pinyin": "chéng wéi", "meaning": "ກາຍເປັນ", "example": "他想成为一名医生。", "audioSrc": "audio/成为_a.mp3", "exampleAudioSrc": "audio/成为_b.mp3"},
{"word": "诚实", "pinyin": "chéng shí", "meaning": "ຊື່ສັດ", "example": "诚实是最好的品德。", "audioSrc": "audio/诚实_a.mp3", "exampleAudioSrc": "audio/诚实_b.mp3"},
{"word": "乘坐", "pinyin": "chéng zuò", "meaning": "ນັ່ງ", "example": "我们乘坐公交车去学校。", "audioSrc": "audio/乘坐_a.mp3", "exampleAudioSrc": "audio/乘坐_b.mp3"},
{"word": "吃惊", "pinyin": "chī jīng", "meaning": "ຕົກໃຈ", "example": "这个消息让我很吃惊。", "audioSrc": "audio/吃惊_a.mp3", "exampleAudioSrc": "audio/吃惊_b.mp3"},
{"word": "重新", "pinyin": "chóng xīn", "meaning": "ໃໝ່", "example": "我需要重新开始。", "audioSrc": "audio/重新_a.mp3", "exampleAudioSrc": "audio/重新_b.mp3"},
{"word": "抽烟", "pinyin": "chōu yān", "meaning": "ສູບຢາ", "example": "这里禁止抽烟。", "audioSrc": "audio/抽烟_a.mp3", "exampleAudioSrc": "audio/抽烟_b.mp3"},
{"word": "出差", "pinyin": "chū chāi", "meaning": "ເດີນທາງເຮັດວຽກ", "example": "爸爸下周要去北京出差。", "audioSrc": "audio/出差_a.mp3", "exampleAudioSrc": "audio/出差_b.mp3"},
{"word": "出发", "pinyin": "chū fā", "meaning": "ອອກເດີນທາງ", "example": "我们明天早上6点出发。", "audioSrc": "audio/出发_a.mp3", "exampleAudioSrc": "audio/出发_b.mp3"},
{"word": "出生", "pinyin": "chū shēng", "meaning": "ເກີດ", "example": "我出生在1990年。", "audioSrc": "audio/出生_a.mp3", "exampleAudioSrc": "audio/出生_b.mp3"},
{"word": "出现", "pinyin": "chū xiàn", "meaning": "ປາກົດ", "example": "问题突然出现了。", "audioSrc": "audio/出现_a.mp3", "exampleAudioSrc": "audio/出现_b.mp3"},
{"word": "厨房", "pinyin": "chú fáng", "meaning": "ຫ້ອງຄົວ", "example": "妈妈在厨房做饭。", "audioSrc": "audio/厨房_a.mp3", "exampleAudioSrc": "audio/厨房_b.mp3"},
{"word": "传真", "pinyin": "chuán zhēn", "meaning": "ແຟັກ", "example": "请把这份文件传真过去。", "audioSrc": "audio/传真_a.mp3", "exampleAudioSrc": "audio/传真_b.mp3"},
{"word": "窗户", "pinyin": "chuāng hu", "meaning": "ປ່ອງຢ້ຽມ", "example": "请打开窗户通风。", "audioSrc": "audio/窗户_a.mp3", "exampleAudioSrc": "audio/窗户_b.mp3"},
{"word": "词语", "pinyin": "cí yǔ", "meaning": "ຄຳສັບ", "example": "这个词语是什么意思？", "audioSrc": "audio/词语_a.mp3", "exampleAudioSrc": "audio/词语_b.mp3"},
{"word": "从来", "pinyin": "cóng lái", "meaning": "ເຄີຍ", "example": "我从来没见过他。", "audioSrc": "audio/从来_a.mp3", "exampleAudioSrc": "audio/从来_b.mp3"},
{"word": "粗心", "pinyin": "cū xīn", "meaning": "ບໍ່ລະມັດລະວັງ", "example": "他因为粗心犯了错误。", "audioSrc": "audio/粗心_a.mp3", "exampleAudioSrc": "audio/粗心_b.mp3"},
{"word": "存", "pinyin": "cún", "meaning": "ຝາກ", "example": "我要去银行存钱。", "audioSrc": "audio/存_a.mp3", "exampleAudioSrc": "audio/存_b.mp3"},
{"word": "错误", "pinyin": "cuò wù", "meaning": "ຄວາມຜິດພາດ", "example": "你做的文件有些地方错误。", "audioSrc": "audio/错误_a.mp3", "exampleAudioSrc": "audio/错误_b.mp3"},
{"word": "答案", "pinyin": "dá àn", "meaning": "ຄຳຕອບ", "example": "请写下你的答案。", "audioSrc": "audio/答案_a.mp3", "exampleAudioSrc": "audio/答案_b.mp3"},
{"word": "打扮", "pinyin": "dǎ ban", "meaning": "ແຕ່ງຕົວ", "example": "她今天打扮得很漂亮。", "audioSrc": "audio/打扮_a.mp3", "exampleAudioSrc": "audio/打扮_b.mp3"},
{"word": "打扰", "pinyin": "dǎ rǎo", "meaning": "ລົບກວນ", "example": "抱歉打扰你了。", "audioSrc": "audio/打扰_a.mp3", "exampleAudioSrc": "audio/打扰_b.mp3"},
{"word": "打印", "pinyin": "dǎ yìn", "meaning": "ພິມ", "example": "请帮我打印这份文件。", "audioSrc": "audio/打印_a.mp3", "exampleAudioSrc": "audio/打印_b.mp3"},
{"word": "打招呼", "pinyin": "dǎ zhāo hu", "meaning": "ທັກທາຍ", "example": "他微笑着跟我打招呼。", "audioSrc": "audio/打招呼_a.mp3", "exampleAudioSrc": "audio/打招呼_b.mp3"},
{"word": "打折", "pinyin": "dǎ zhé", "meaning": "ຫຼຸດລາຄາ", "example": "这家商店正在打折。", "audioSrc": "audio/打折_a.mp3", "exampleAudioSrc": "audio/打折_b.mp3"},
{"word": "打针", "pinyin": "dǎ zhēn", "meaning": "ສັກຢາ", "example": "孩子害怕打针。", "audioSrc": "audio/打针_a.mp3", "exampleAudioSrc": "audio/打针_b.mp3"},
{"word": "大夫", "pinyin": "dài fu", "meaning": "ໝໍ", "example": "大夫说我只是感冒了。", "audioSrc": "audio/大夫_a.mp3", "exampleAudioSrc": "audio/大夫_b.mp3"},
{"word": "大概", "pinyin": "dà gài", "meaning": "ໂດຍປະມານ", "example": "他大概30岁左右。", "audioSrc": "audio/大概_a.mp3", "exampleAudioSrc": "audio/大概_b.mp3"},
{"word": "大使馆", "pinyin": "dà shǐ guǎn", "meaning": "ສະຖານທູດ", "example": "中国大使馆在万象市中心。", "audioSrc": "audio/大使馆_a.mp3", "exampleAudioSrc": "audio/大使馆_b.mp3"},
{"word": "大约", "pinyin": "dà yuē", "meaning": "ປະມານ", "example": "会议大约持续两小时。", "audioSrc": "audio/大约_a.mp3", "exampleAudioSrc": "audio/大约_b.mp3"},
{"word": "戴", "pinyin": "dài", "meaning": "ໃສ່", "example": "他每天都戴眼镜。", "audioSrc": "audio/戴_a.mp3", "exampleAudioSrc": "audio/戴_b.mp3"},
{"word": "当", "pinyin": "dāng", "meaning": "ເມື່ອ", "example": "当我年轻的时候喜欢旅行。", "audioSrc": "audio/当_a.mp3", "exampleAudioSrc": "audio/当_b.mp3"},
{"word": "当时", "pinyin": "dāng shí", "meaning": "ໃນເວລານັ້ນ", "example": "当时我正在吃饭。", "audioSrc": "audio/当时_a.mp3", "exampleAudioSrc": "audio/当时_b.mp3"},
{"word": "刀", "pinyin": "dāo", "meaning": "ມີດ", "example": "这把刀很锋利。", "audioSrc": "audio/刀_a.mp3", "exampleAudioSrc": "audio/刀_b.mp3"},
{"word": "导游", "pinyin": "dǎo yóu", "meaning": "ນຳທ່ຽວ", "example": "导游给我们介绍了许多景点。", "audioSrc": "audio/导游_a.mp3", "exampleAudioSrc": "audio/导游_b.mp3"},
{"word": "到处", "pinyin": "dào chù", "meaning": "ທົ່ວທຸກແຫ່ງ", "example": "春节期间到处都很热闹。", "audioSrc": "audio/到处_a.mp3", "exampleAudioSrc": "audio/到处_b.mp3"},
{"word": "到底", "pinyin": "dào dǐ", "meaning": "ສຸດທ້າຍ", "example": "你到底想说什么？", "audioSrc": "audio/到底_a.mp3", "exampleAudioSrc": "audio/到底_b.mp3"},
{"word": "倒", "pinyin": "dǎo", "meaning": "ລົ້ມ", "example": "他不小心倒在了地上。", "audioSrc": "audio/倒_a.mp3", "exampleAudioSrc": "audio/倒_b.mp3"},
{"word": "道歉", "pinyin": "dào qiàn", "meaning": "ຂໍໂທດ", "example": "他应该向你道歉。", "audioSrc": "audio/道歉_a.mp3", "exampleAudioSrc": "audio/道歉_b.mp3"},
{"word": "得", "pinyin": "dé", "meaning": "ໄດ້", "example": "你做得很好！", "audioSrc": "audio/得_a.mp3", "exampleAudioSrc": "audio/得_b.mp3"},
{"word": "得意", "pinyin": "dé yì", "meaning": "ພໍໃຈ", "example": "他考试得了满分.", "audioSrc": "audio/得意_a.mp3", "exampleAudioSrc": "audio/得意_b.mp3"},
{"word": "地点", "pinyin": "dì diǎn", "meaning": "ສະຖານທີ່", "example": "请告诉我见面的地点。", "audioSrc": "audio/地点_a.mp3", "exampleAudioSrc": "audio/地点_b.mp3"},
{"word": "地球", "pinyin": "dì qiú", "meaning": "ໂລກ", "example": "地球是我们共同的家园。", "audioSrc": "audio/地球_a.mp3", "exampleAudioSrc": "audio/地球_b.mp3"},
{"word": "地址", "pinyin": "dì zhǐ", "meaning": "ທີ່ຢູ່", "example": "请留下你的地址。", "audioSrc": "audio/地址_a.mp3", "exampleAudioSrc": "audio/地址_b.mp3"},
{"word": "登机牌", "pinyin": "dēng jī pái", "meaning": "ບັດຂຶ້ນເຮືອບິນ", "example": "请出示您的登机牌。", "audioSrc": "audio/登机牌_a.mp3", "exampleAudioSrc": "audio/登机牌_b.mp3"},
{"word": "等", "pinyin": "děng", "meaning": "ລໍຖ້າ", "example": "请在这里等我。", "audioSrc": "audio/等_a.mp3", "exampleAudioSrc": "audio/等_b.mp3"},
{"word": "低", "pinyin": "dī", "meaning": "ຕ່ຳ", "example": "这个桌子太低了。", "audioSrc": "audio/低_a.mp3", "exampleAudioSrc": "audio/低_b.mp3"},
{"word": "底", "pinyin": "dǐ", "meaning": "ກັບຄືນ", "example": "请检查箱子的底部。", "audioSrc": "audio/底_a.mp3", "exampleAudioSrc": "audio/底_b.mp3"},
{"word": "调查", "pinyin": "diào chá", "meaning": "ສຳຫຼວດ", "example": "警察正在调查这个案件。", "audioSrc": "audio/调查_a.mp3", "exampleAudioSrc": "audio/调查_b.mp3"},
{"word": "掉", "pinyin": "diào", "meaning": "ຫຼຸດ", "example": "我的钥匙丢了。", "audioSrc": "audio/掉_a.mp3", "exampleAudioSrc": "audio/掉_b.mp3"},
{"word": "丢", "pinyin": "diū", "meaning": "ເສຍ", "example": "我不小心把钱包丢了。", "audioSrc": "audio/丢_a.mp3", "exampleAudioSrc": "audio/丢_b.mp3"},
{"word": "动作", "pinyin": "dòng zuò", "meaning": "ການເຄື່ອນໄຫວ", "example": "这个舞蹈动作很难。", "audioSrc": "audio/动作_a.mp3", "exampleAudioSrc": "audio/动作_b.mp3"},
{"word": "堵车", "pinyin": "dǔ chē", "meaning": "ກັນຈະລາຍ", "example": "去上班的路上经常堵车。", "audioSrc": "audio/堵车_a.mp3", "exampleAudioSrc": "audio/堵车_b.mp3"},
{"word": "肚子", "pinyin": "dù zi", "meaning": "ທ້ອງ", "example": "我肚子饿了。", "audioSrc": "audio/肚子_a.mp3", "exampleAudioSrc": "audio/肚子_b.mp3"},
{"word": "短信", "pinyin": "duǎn xìn", "meaning": "ຂໍ້ຄວາມສັ້ນ", "example": "请给我发短信。", "audioSrc": "audio/短信_a.mp3", "exampleAudioSrc": "audio/短信_b.mp3"},
{"word": "对话", "pinyin": "duì huà", "meaning": "ການສົນທະນາ", "example": "我们需要进行一次认真的对话。", "audioSrc": "audio/对话_a.mp3", "exampleAudioSrc": "audio/对话_b.mp3"},
{"word": "对面", "pinyin": "duì miàn", "meaning": "ຂ້າມຝ່າຍ", "example": "银行就在超市对面。", "audioSrc": "audio/对面_a.mp3", "exampleAudioSrc": "audio/对面_b.mp3"},
{"word": "对于", "pinyin": "duì yú", "meaning": "ສຳລັບ", "example": "对于这个问题，我有不同看法。", "audioSrc": "audio/对于_a.mp3", "exampleAudioSrc": "audio/对于_b.mp3"},
{"word": "儿童", "pinyin": "ér tóng", "meaning": "ເດັກນ້ອຍ", "example": "这个公园是儿童游乐场。", "audioSrc": "audio/儿童_a.mp3", "exampleAudioSrc": "audio/儿童_b.mp3"},
{"word": "而", "pinyin": "ér", "meaning": "ແຕ່", "example": "他很聪明而勤奋。", "audioSrc": "audio/而_a.mp3", "exampleAudioSrc": "audio/而_b.mp3"},
{"word": "发生", "pinyin": "fā shēng", "meaning": "ເກີດຂຶ້ນ", "example": "昨天这里发生了交通事故。", "audioSrc": "audio/发生_a.mp3", "exampleAudioSrc": "audio/发生_b.mp3"},
{"word": "发展", "pinyin": "fā zhǎn", "meaning": "ພັດທະນາ", "example": "中国经济正在快速发展。", "audioSrc": "audio/发展_a.mp3", "exampleAudioSrc": "audio/发展_b.mp3"},
{"word": "法律", "pinyin": "fǎ lǜ", "meaning": "ກົດໝາຍ", "example": "每个人都应该遵守法律。", "audioSrc": "audio/法律_a.mp3", "exampleAudioSrc": "audio/法律_b.mp3"},
{"word": "烦恼", "pinyin": "fán nǎo", "meaning": "ຄວາມກັງວົນ", "example": "最近工作让我很烦恼。", "audioSrc": "audio/烦恼_a.mp3", "exampleAudioSrc": "audio/烦恼_b.mp3"},
{"word": "反对", "pinyin": "fǎn duì", "meaning": "ຄັດຄ້ານ", "example": "很多人反对这个计划。", "audioSrc": "audio/反对_a.mp3", "exampleAudioSrc": "audio/反对_b.mp3"},
{"word": "方法", "pinyin": "fāng fǎ", "meaning": "ວິທີການ", "example": "我们需要找到更好的方法。", "audioSrc": "audio/方法_a.mp3", "exampleAudioSrc": "audio/方法_b.mp3"},
{"word": "方面", "pinyin": "fāng miàn", "meaning": "ດ້ານ", "example": "这个项目在很多方面都很成功。", "audioSrc": "audio/方面_a.mp3", "exampleAudioSrc": "audio/方面_b.mp3"},
{"word": "翻译", "pinyin": "fān yì", "meaning": "ແປ", "example": "请帮我把这篇文章翻译成英语。", "audioSrc": "audio/翻译_a.mp3", "exampleAudioSrc": "audio/翻译_b.mp3"},
{"word": "方向", "pinyin": "fāng xiàng", "meaning": "ທິດທາງ", "example": "请问火车站是什么方向？", "audioSrc": "audio/方向_a.mp3", "exampleAudioSrc": "audio/方向_b.mp3"},
{"word": "房东", "pinyin": "fáng dōng", "meaning": "ເຈົ້າຂອງເຮືອນ", "example": "房东每个月5号来收房租。", "audioSrc": "audio/房东_a.mp3", "exampleAudioSrc": "audio/房东_b.mp3"},
{"word": "放弃", "pinyin": "fàng qì", "meaning": "ຍອມແພ້", "example": "他从不放弃自己的梦想。", "audioSrc": "audio/放弃_a.mp3", "exampleAudioSrc": "audio/放弃_b.mp3"},
{"word": "放暑假", "pinyin": "fàng shǔ jià", "meaning": "ປິດພາກຮຽນ", "example": "学生们下周开始放暑假。", "audioSrc": "audio/放暑假_a.mp3", "exampleAudioSrc": "audio/放暑假_b.mp3"},
{"word": "放松", "pinyin": "fàng sōng", "meaning": "ຜ່ອນຄາຍ", "example": "周末我喜欢在家放松。", "audioSrc": "audio/放松_a.mp3", "exampleAudioSrc": "audio/放松_b.mp3"},
{"word": "份", "pinyin": "fèn", "meaning": "ສ່ວນ", "example": "请给我一份报纸。", "audioSrc": "audio/份_a.mp3", "exampleAudioSrc": "audio/份_b.mp3"},
{"word": "丰富", "pinyin": "fēng fù", "meaning": "ອຸດົມສົມບູນ", "example": "这个博物馆的展品很丰富。", "audioSrc": "audio/丰富_a.mp3", "exampleAudioSrc": "audio/丰富_b.mp3"},
{"word": "否则", "pinyin": "fǒu zé", "meaning": "ຖ້າບໍ່ດັ່ງນັ້ນ", "example": "快起床，否则会迟到。", "audioSrc": "audio/否则_a.mp3", "exampleAudioSrc": "audio/否则_b.mp3"},
{"word": "符合", "pinyin": "fú hé", "meaning": "ສອດຄ່ອງ", "example": "你的条件符合我们的要求。", "audioSrc": "audio/符合_a.mp3", "exampleAudioSrc": "audio/符合_b.mp3"},
{"word": "父亲", "pinyin": "fù qīn", "meaning": "ພໍ່", "example": "我父亲是一名工程师。", "audioSrc": "audio/父亲_a.mp3", "exampleAudioSrc": "audio/父亲_b.mp3"},
{"word": "付款", "pinyin": "fù kuǎn", "meaning": "ຈ່າຍເງິນ", "example": "您可以用信用卡付款。", "audioSrc": "audio/付款_a.mp3", "exampleAudioSrc": "audio/付款_b.mp3"},
{"word": "负责", "pinyin": "fù zé", "meaning": "ຮັບຜິດຊອບ", "example": "他负责这个项目。", "audioSrc": "audio/负责_a.mp3", "exampleAudioSrc": "audio/负责_b.mp3"},
{"word": "复印", "pinyin": "fù yìn", "meaning": "ຖ່າຍສຳເນົາ", "example": "请帮我复印这份文件。", "audioSrc": "audio/复印_a.mp3", "exampleAudioSrc": "audio/复印_b.mp3"},
{"word": "复杂", "pinyin": "fù zá", "meaning": "ສັບສົນ", "example": "这个问题很复杂。", "audioSrc": "audio/复杂_a.mp3", "exampleAudioSrc": "audio/复杂_b.mp3"},
{"word": "富", "pinyin": "fù", "meaning": "ຮັ່ງມີ", "example": "他是一位富有的商人。", "audioSrc": "audio/富_a.mp3", "exampleAudioSrc": "audio/富_b.mp3"},
{"word": "改变", "pinyin": "gǎi biàn", "meaning": "ປ່ຽນແປງ", "example": "科技改变了我们的生活。", "audioSrc": "audio/改变_a.mp3", "exampleAudioSrc": "audio/改变_b.mp3"},
{"word": "赶", "pinyin": "gǎn", "meaning": "ໄປໃຫ້ທັນ", "example": "我要赶最后一班公交车。", "audioSrc": "audio/赶_a.mp3", "exampleAudioSrc": "audio/赶_b.mp3"},
{"word": "敢", "pinyin": "gǎn", "meaning": "ກ້າ", "example": "你敢跳进游泳池吗？", "audioSrc": "audio/敢_a.mp3", "exampleAudioSrc": "audio/敢_b.mp3"},
{"word": "感动", "pinyin": "gǎn dòng", "meaning": "ປະທົບໃຈ", "example": "这部电影让我很感动。", "audioSrc": "audio/感动_a.mp3", "exampleAudioSrc": "audio/感动_b.mp3"},
{"word": "感觉", "pinyin": "gǎn jué", "meaning": "ຮູ້ສຶກ", "example": "我感觉有点累了。", "audioSrc": "audio/感觉_a.mp3", "exampleAudioSrc": "audio/感觉_b.mp3"},
{"word": "感情", "pinyin": "gǎn qíng", "meaning": "ຄວາມຮູ້ສຶກ", "example": "他们之间有很深的感情。", "audioSrc": "audio/感情_a.mp3", "exampleAudioSrc": "audio/感情_b.mp3"},
{"word": "感谢", "pinyin": "gǎn xiè", "meaning": "ຂອບໃຈ", "example": "我感谢你的帮助。", "audioSrc": "audio/感谢_a.mp3", "exampleAudioSrc": "audio/感谢_b.mp3"},
{"word": "干", "pinyin": "gàn", "meaning": "ເຮັດ", "example": "你在干什么？", "audioSrc": "audio/干_a.mp3", "exampleAudioSrc": "audio/干_b.mp3"},
{"word": "干杯", "pinyin": "gān bēi", "meaning": "ຊວກ", "example": "让我们为友谊干杯！", "audioSrc": "audio/干杯_a.mp3", "exampleAudioSrc": "audio/干杯_b.mp3"},
{"word": "刚", "pinyin": "gāng", "meaning": "ພຽງເລັກນ້ອຍ", "example": "我刚到办公室。", "audioSrc": "audio/刚_a.mp3", "exampleAudioSrc": "audio/刚_b.mp3"},
{"word": "高速公路", "pinyin": "gāo sù gōng lù", "meaning": "ທາງດ່ວນ", "example": "我们走高速公路去机场。", "audioSrc": "audio/高速公路_a.mp3", "exampleAudioSrc": "audio/高速公路_b.mp3"},
{"word": "胳膊", "pinyin": "gē bo", "meaning": "ແຂນ", "example": "我的胳膊有点疼。", "audioSrc": "audio/胳膊_a.mp3", "exampleAudioSrc": "audio/胳膊_b.mp3"},
{"word": "各", "pinyin": "gè", "meaning": "ແຕ່ລະ", "example": "各位请坐。", "audioSrc": "audio/各_a.mp3", "exampleAudioSrc": "audio/各_b.mp3"},
{"word": "工资", "pinyin": "gōng zī", "meaning": "ເງິນເດືອນ", "example": "他每月5号发工资。", "audioSrc": "audio/工资_a.mp3", "exampleAudioSrc": "audio/工资_b.mp3"},
{"word": "公里", "pinyin": "gōng lǐ", "meaning": "ກິໂລແມັດ", "example": "这个城市距离海边有20公里。", "audioSrc": "audio/公里_a.mp3", "exampleAudioSrc": "audio/公里_b.mp3"},
{"word": "功夫", "pinyin": "gōng fu", "meaning": "ກົດຫມາຍສະເຕີລີ່", "example": "他练中国功夫很多年了。", "audioSrc": "audio/功夫_a.mp3", "exampleAudioSrc": "audio/功夫_b.mp3"},
{"word": "共同", "pinyin": "gòng tóng", "meaning": "ຮ່ວມກັນ", "example": "这是我们共同的责任。", "audioSrc": "audio/共同_a.mp3", "exampleAudioSrc": "audio/共同_b.mp3"},
{"word": "购物", "pinyin": "gòu wù", "meaning": "ຊື້ຂອງ", "example": "周末我喜欢去购物。", "audioSrc": "audio/购物_a.mp3", "exampleAudioSrc": "audio/购物_b.mp3"},
{"word": "够", "pinyin": "gòu", "meaning": "ພໍ", "example": "这些钱够用吗？", "audioSrc": "audio/够_a.mp3", "exampleAudioSrc": "audio/够_b.mp3"},
{"word": "估计", "pinyin": "gū jì", "meaning": "ຄາດຄະເນ", "example": "我估计他明天会来。", "audioSrc": "audio/估计_a.mp3", "exampleAudioSrc": "audio/估计_b.mp3"},
{"word": "鼓励", "pinyin": "gǔ lì", "meaning": "ແຮງຈູງໃຈ", "example": "老师经常鼓励我们。", "audioSrc": "audio/鼓励_a.mp3", "exampleAudioSrc": "audio/鼓励_b.mp3"},
{"word": "故意", "pinyin": "gù yì", "meaning": "ຈະເຣິດ", "example": "他不是故意迟到的。", "audioSrc": "audio/故意_a.mp3", "exampleAudioSrc": "audio/故意_b.mp3"},
{"word": "顾客", "pinyin": "gù kè", "meaning": "ລູກຄ້າ", "example": "这家商店的顾客很多。", "audioSrc": "audio/顾客_a.mp3", "exampleAudioSrc": "audio/顾客_b.mp3"},
{"word": "挂", "pinyin": "guà", "meaning": "ແຂວນ", "example": "请把外套挂在衣架上。", "audioSrc": "audio/挂_a.mp3", "exampleAudioSrc": "audio/挂_b.mp3"},
{"word": "关键", "pinyin": "guān jiàn", "meaning": "ທີ່ສຳຄັນ", "example": "这是解决问题的关键。", "audioSrc": "audio/关键_a.mp3", "exampleAudioSrc": "audio/关键_b.mp3"},
{"word": "观众", "pinyin": "guān zhòng", "meaning": "ຜູ້ຊົມ", "example": "观众们热烈鼓掌。", "audioSrc": "audio/观众_a.mp3", "exampleAudioSrc": "audio/观众_b.mp3"},
{"word": "管理", "pinyin": "guǎn lǐ", "meaning": "ຈັດການ", "example": "他负责管理这个部门。", "audioSrc": "audio/管理_a.mp3", "exampleAudioSrc": "audio/管理_b.mp3"},
{"word": "光", "pinyin": "guāng", "meaning": "ແສງ", "example": "阳光很温暖。", "audioSrc": "audio/光_a.mp3", "exampleAudioSrc": "audio/光_b.mp3"},
{"word": "广播", "pinyin": "guǎng bō", "meaning": "ວິທະຍຸ", "example": "我每天早上听广播。", "audioSrc": "audio/广播_a.mp3", "exampleAudioSrc": "audio/广播_b.mp3"},
{"word": "广告", "pinyin": "guǎng gào", "meaning": "ການໂຄສະນາ", "example": "这个广告很有创意。", "audioSrc": "audio/广告_a.mp3", "exampleAudioSrc": "audio/广告_b.mp3"},
{"word": "逛", "pinyin": "guàng", "meaning": "ຍ່າງຊື້ຂອງ", "example": "我们昨天逛了商场。", "audioSrc": "audio/逛_a.mp3", "exampleAudioSrc": "audio/逛_b.mp3"},
{"word": "规定", "pinyin": "guī dìng", "meaning": "ກົດລະບຽບ", "example": "我们必须遵守学校的规定。", "audioSrc": "audio/规定_a.mp3", "exampleAudioSrc": "audio/规定_b.mp3"},
{"word": "国籍", "pinyin": "guó jí", "meaning": "ສັນຊາດ", "example": "我的国籍是中国。", "audioSrc": "audio/国籍_a.mp3", "exampleAudioSrc": "audio/国籍_b.mp3"},
{"word": "国际", "pinyin": "guó jì", "meaning": "ສາກົນ", "example": "这是一个国际会议。", "audioSrc": "audio/国际_a.mp3", "exampleAudioSrc": "audio/国际_b.mp3"},
{"word": "果汁", "pinyin": "guǒ zhī", "meaning": "ນ້ຳໝາກໄມ້", "example": "请给我一杯橙汁。", "audioSrc": "audio/果汁_a.mp3", "exampleAudioSrc": "audio/果汁_b.mp3"},
{"word": "过程", "pinyin": "guò chéng", "meaning": "ຂະບວນການ", "example": "学习语言是一个漫长的过程。", "audioSrc": "audio/过程_a.mp3", "exampleAudioSrc": "audio/过程_b.mp3"},
{"word": "海洋", "pinyin": "hǎi yáng", "meaning": "ມະຫາສະໝຸດ", "example": "海洋里有很多生物。", "audioSrc": "audio/海洋_a.mp3", "exampleAudioSrc": "audio/海洋_b.mp3"},
{"word": "害羞", "pinyin": "hài xiū", "meaning": "ອາຍ", "example": "她在众人面前很害羞。", "audioSrc": "audio/害羞_a.mp3", "exampleAudioSrc": "audio/害羞_b.mp3"},
{"word": "寒假", "pinyin": "hán jià", "meaning": "ພັກຮອນ", "example": "寒假我们打算去旅行。", "audioSrc": "audio/寒假_a.mp3", "exampleAudioSrc": "audio/寒假_b.mp3"},
{"word": "汗", "pinyin": "hàn", "meaning": "ເຫື່ອ", "example": "运动后我出了很多汗。", "audioSrc": "audio/汗_a.mp3", "exampleAudioSrc": "audio/汗_b.mp3"},
{"word": "航班", "pinyin": "háng bān", "meaning": "ຊອງບິນ", "example": "我的航班明天早上起飞。", "audioSrc": "audio/航班_a.mp3", "exampleAudioSrc": "audio/航班_b.mp3"},
{"word": "好处", "pinyin": "hǎo chu", "meaning": "ຜົນປະໂຫຍດ", "example": "运动对身体有好处。", "audioSrc": "audio/好处_a.mp3", "exampleAudioSrc": "audio/好处_b.mp3"},
{"word": "好像", "pinyin": "hǎo xiàng", "meaning": "ຄືວ່າ", "example": "他好像不太高兴。", "audioSrc": "audio/好像_a.mp3", "exampleAudioSrc": "audio/好像_b.mp3"},
{"word": "号码", "pinyin": "hào mǎ", "meaning": "ເລກ", "example": "请告诉我你的电话号码。", "audioSrc": "audio/号码_a.mp3", "exampleAudioSrc": "audio/号码_b.mp3"},
{"word": "合格", "pinyin": "hé gé", "meaning": "ຜ່ານມາດຕະຖານ", "example": "这些产品都合格。", "audioSrc": "audio/合格_a.mp3", "exampleAudioSrc": "audio/合格_b.mp3"},
{"word": "合适", "pinyin": "hé shì", "meaning": "ເໝາະສົມ", "example": "这件衣服很合适你。", "audioSrc": "audio/合适_a.mp3", "exampleAudioSrc": "audio/合适_b.mp3"},
{"word": "盒子", "pinyin": "hé zi", "meaning": "ກ່ອງ", "example": "我把礼物放在盒子里。", "audioSrc": "audio/盒子_a.mp3", "exampleAudioSrc": "audio/盒子_b.mp3"},
{"word": "后悔", "pinyin": "hòu huǐ", "meaning": "ສົງໄສ", "example": "我后悔没好好学习。", "audioSrc": "audio/后悔_a.mp3", "exampleAudioSrc": "audio/后悔_b.mp3"},
{"word": "厚", "pinyin": "hòu", "meaning": "ໜາ", "example": "这本书很厚。", "audioSrc": "audio/厚_a.mp3", "exampleAudioSrc": "audio/厚_b.mp3"},
{"word": "互联网", "pinyin": "hù lián wǎng", "meaning": "ອິນເຕີເນັດ", "example": "互联网改变了我们的生活。", "audioSrc": "audio/互联网_a.mp3", "exampleAudioSrc": "audio/互联网_b.mp3"},
{"word": "互相", "pinyin": "hù xiāng", "meaning": "ກັນແລະກັນ", "example": "我们应该互相帮助。", "audioSrc": "audio/互相_a.mp3", "exampleAudioSrc": "audio/互相_b.mp3"},
{"word": "护士", "pinyin": "hù shi", "meaning": "ພະຍາບານ", "example": "护士正在照顾病人。", "audioSrc": "audio/护士_a.mp3", "exampleAudioSrc": "audio/护士_b.mp3"},
{"word": "怀疑", "pinyin": "huái yí", "meaning": "ສົງໄສ", "example": "我怀疑他说谎。", "audioSrc": "audio/怀疑_a.mp3", "exampleAudioSrc": "audio/怀疑_b.mp3"},
{"word": "回忆", "pinyin": "huí yì", "meaning": "ຈື່ຈຳ", "example": "我喜欢回忆童年时光。", "audioSrc": "audio/回忆_a.mp3", "exampleAudioSrc": "audio/回忆_b.mp3"},
{"word": "活动", "pinyin": "huó dòng", "meaning": "ກິດຈະກຳ", "example": "学校有很多课外活动。", "audioSrc": "audio/活动_a.mp3", "exampleAudioSrc": "audio/活动_b.mp3"},
{"word": "活泼", "pinyin": "huó po", "meaning": "ຄວາມຄືບໜ້າ", "example": "她是个活泼的女孩。", "audioSrc": "audio/活泼_a.mp3", "exampleAudioSrc": "audio/活泼_b.mp3"},
{"word": "火", "pinyin": "huǒ", "meaning": "ໄຟ", "example": "小心火！", "audioSrc": "audio/火_a.mp3", "exampleAudioSrc": "audio/火_b.mp3"},
{"word": "获得", "pinyin": "huò dé", "meaning": "ໄດ້ຮັບ", "example": "他获得了比赛冠军。", "audioSrc": "audio/获得_a.mp3", "exampleAudioSrc": "audio/获得_b.mp3"},
{"word": "积极", "pinyin": "jī jí", "meaning": "ການເປັນຜູ້ນຳ", "example": "他对工作很积极。", "audioSrc": "audio/积极_a.mp3", "exampleAudioSrc": "audio/积极_b.mp3"},
{"word": "积累", "pinyin": "jī lěi", "meaning": "ສະສົມ", "example": "他积累了丰富的工作经验。", "audioSrc": "audio/积累_a.mp3", "exampleAudioSrc": "audio/积累_b.mp3"},
{"word": "基础", "pinyin": "jī chǔ", "meaning": "ພື້ນຖານ", "example": "数学是科学的基础。", "audioSrc": "audio/基础_a.mp3", "exampleAudioSrc": "audio/基础_b.mp3"},
{"word": "激动", "pinyin": "jī dòng", "meaning": "ຕື່ນເຕັ້ນ", "example": "听到好消息我很激动。", "audioSrc": "audio/激动_a.mp3", "exampleAudioSrc": "audio/激动_b.mp3"},
{"word": "及时", "pinyin": "jí shí", "meaning": "ທັນເວລາ", "example": "医生及时赶到救了病人。", "audioSrc": "audio/及时_a.mp3", "exampleAudioSrc": "audio/及时_b.mp3"},
{"word": "即使", "pinyin": "jí shǐ", "meaning": "ເຖິງວ່າ", "example": "即使下雨，我们也要去。", "audioSrc": "audio/即使_a.mp3", "exampleAudioSrc": "audio/即使_b.mp3"},
{"word": "计划", "pinyin": "jì huà", "meaning": "ແຜນການ", "example": "我们制定了旅行计划。", "audioSrc": "audio/计划_a.mp3", "exampleAudioSrc": "audio/计划_b.mp3"},
{"word": "记者", "pinyin": "jì zhě", "meaning": "ນັກຂ່າວ", "example": "那位记者采访了市长。", "audioSrc": "audio/记者_a.mp3", "exampleAudioSrc": "audio/记者_b.mp3"},
{"word": "技术", "pinyin": "jì shù", "meaning": "ເຕັກນິກ", "example": "这家公司技术先进。", "audioSrc": "audio/技术_a.mp3", "exampleAudioSrc": "audio/技术_b.mp3"},
{"word": "既然", "pinyin": "jì rán", "meaning": "ເນື່ອງຈາກ", "example": "既然你来了，就一起吃饭吧。", "audioSrc": "audio/既然_a.mp3", "exampleAudioSrc": "audio/既然_b.mp3"},
{"word": "继续", "pinyin": "jì xù", "meaning": "ສືບຕໍ່", "example": "请继续你的工作。", "audioSrc": "audio/继续_a.mp3", "exampleAudioSrc": "audio/继续_b.mp3"},
{"word": "寄", "pinyin": "jì", "meaning": "ສົ່ງ", "example": "我要寄一封信给朋友。", "audioSrc": "audio/寄_a.mp3", "exampleAudioSrc": "audio/寄_b.mp3"},
{"word": "加班", "pinyin": "jiā bān", "meaning": "ເຮັດວຽກເສີມ", "example": "今晚我要加班。", "audioSrc": "audio/加班_a.mp3", "exampleAudioSrc": "audio/加班_b.mp3"},
{"word": "加油站", "pinyin": "jiā yóu zhàn", "meaning": "ສະຖານີອາຍວັດ", "example": "前面有一个加油站。", "audioSrc": "audio/加油站_a.mp3", "exampleAudioSrc": "audio/加油站_b.mp3"},
{"word": "家具", "pinyin": "jiā jù", "meaning": "ເຟີນິເຈີ", "example": "我们买了新家具。", "audioSrc": "audio/家具_a.mp3", "exampleAudioSrc": "audio/家具_b.mp3"},
{"word": "假", "pinyin": "jiǎ", "meaning": "ປອມ", "example": "这是假新闻。", "audioSrc": "audio/假_a.mp3", "exampleAudioSrc": "audio/假_b.mp3"},
{"word": "价格", "pinyin": "jià gé", "meaning": "ລາຄາ", "example": "这个价格很合理。", "audioSrc": "audio/价格_a.mp3", "exampleAudioSrc": "audio/价格_b.mp3"},
{"word": "坚持", "pinyin": "jiān chí", "meaning": "ຍຶດໝັ້ນ", "example": "他坚持每天锻炼。", "audioSrc": "audio/坚持_a.mp3", "exampleAudioSrc": "audio/坚持_b.mp3"},
{"word": "减肥", "pinyin": "jiǎn féi", "meaning": "ຫຼຸດນ້ຳໜັກ", "example": "她正在努力减肥。", "audioSrc": "audio/减肥_a.mp3", "exampleAudioSrc": "audio/减肥_b.mp3"},
{"word": "减少", "pinyin": "jiǎn shǎo", "meaning": "ຫຼຸດລົງ", "example": "我们需要减少浪费。", "audioSrc": "audio/减少_a.mp3", "exampleAudioSrc": "audio/减少_b.mp3"},
{"word": "建议", "pinyin": "jiàn yì", "meaning": "ຄຳແນະນຳ", "example": "你有什么建议吗？", "audioSrc": "audio/建议_a.mp3", "exampleAudioSrc": "audio/建议_b.mp3"},
{"word": "将来", "pinyin": "jiāng lái", "meaning": "ອະນາຄົດ", "example": "将来我想当医生。", "audioSrc": "audio/将来_a.mp3", "exampleAudioSrc": "audio/将来_b.mp3"},
{"word": "奖金", "pinyin": "jiǎng jīn", "meaning": "ເງິນລາງວັນ,ໂບນັສ", "example": "他获得了奖金。", "audioSrc": "audio/奖金_a.mp3", "exampleAudioSrc": "audio/奖金_b.mp3"},
{"word": "降低", "pinyin": "jiàng dī", "meaning": "ຫຼຸດລົງ,ຫຼຸດຜ່ອນ", "example": "公司决定降低商品价格。", "audioSrc": "audio/降低_a.mp3", "exampleAudioSrc": "audio/降低_b.mp3"},
{"word": "降落", "pinyin": "jiàng luò", "meaning": "ລົງຈອດ(ຍົນ)", "example": "飞机马上就要降落。", "audioSrc": "audio/降落_a.mp3", "exampleAudioSrc": "audio/降落_b.mp3"},
{"word": "交", "pinyin": "jiāo", "meaning": "ສົ່ງ", "example": "请交作业。", "audioSrc": "audio/交_a.mp3", "exampleAudioSrc": "audio/交_b.mp3"},
{"word": "交流", "pinyin": "jiāo liú", "meaning": "ແລກປ່ຽນ,ສື່ສານ", "example": "你应该多跟中国人交流。", "audioSrc": "audio/交流_a.mp3", "exampleAudioSrc": "audio/交流_b.mp3"},
{"word": "交通", "pinyin": "jiāo tōng", "meaning": "ການຈະລາຈອນ", "example": "这里的交通很便利。", "audioSrc": "audio/交通_a.mp3", "exampleAudioSrc": "audio/交通_b.mp3"},
{"word": "郊区", "pinyin": "jiāo qū", "meaning": "ຊານເມືອງ", "example": "我家在郊区。", "audioSrc": "audio/郊区_a.mp3", "exampleAudioSrc": "audio/郊区_b.mp3"},
{"word": "骄傲", "pinyin": "jiāo ào", "meaning": "ຄວາມພູມໃຈ", "example": "他为儿子感到骄傲。", "audioSrc": "audio/骄傲_a.mp3", "exampleAudioSrc": "audio/骄傲_b.mp3"},
{"word": "饺子", "pinyin": "jiǎo zi", "meaning": "ກ້ຽວ", "example": "春节中国人喜欢吃饺子", "audioSrc": "audio/饺子_a.mp3", "exampleAudioSrc": "audio/饺子_b.mp3"},
{"word": "教授", "pinyin": "jiào shòu", "meaning": "ສາດສະດາຈານ", "example": "王教授是我的最喜欢的老师。", "audioSrc": "audio/教授"}
];

function playAudio(src) {
    const audio = new Audio(src);
    audio.play();
}

function loadWords() {
    const wordTableBody = document.getElementById('wordTable').getElementsByTagName('tbody')[0];
    wordTableBody.innerHTML = ''; // 清空现有列表

    words.forEach(word => {
        const row = wordTableBody.insertRow();
        row.insertCell(0).textContent = word.word;
        row.insertCell(1).innerHTML = `<span class="pinyin">${word.pinyin}</span>`;
        row.insertCell(2).textContent = word.meaning;
        const exampleCell = row.insertCell(3);
        exampleCell.textContent = word.example;
        const audioButton = document.createElement('button');
        audioButton.textContent = 'ຟັງປະໂຫຍກ';
        audioButton.onclick = () => playAudio(word.exampleAudioSrc);
        exampleCell.appendChild(audioButton);
        const pinyinButton = document.createElement('button');
        pinyinButton.textContent = 'ຟັງຄຳສັບ';
        pinyinButton.onclick = () => playAudio(word.audioSrc);
        row.insertCell(4).appendChild(pinyinButton);
    });
}

function searchWord() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const wordTableBody = document.getElementById('wordTable').getElementsByTagName('tbody')[0];
    const rows = wordTableBody.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const wordCell = rows[i].getElementsByTagName('td')[0];
        if (wordCell) {
            const wordText = wordCell.textContent.toLowerCase();
            if (wordText.indexOf(filter) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}

// 加载单词列表
loadWords();

document.getElementById('searchInput').addEventListener('keyup', () => {
    if (event.key === 'Enter') {
        searchWord();
    }
});
