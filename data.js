// 단원 구성: 금성출판사 『공통영어2』(박) 학습 목표 및 성취 기준, Words·Grammar·Reading PPT
// 성취기준: 2022 개정 교육과정 공통영어2
// 형성평가 문항과 수행과제는 성취기준에 맞춰 새로 쓴 예시이므로 사용 전에 교사가 검토한다.
// 교과서 본문은 저작물이므로 이 파일에 옮겨 적지 않는다.
(function () {
  window.SUBJECT = {
    title: '공통영어 배움터', mark: '영', subject: '공통영어',
    course: '고등학교 「공통영어2」 2022 개정 교육과정',
    intro: '금성출판사 『공통영어2』(박)의 네 레슨에 맞춰 수업 자료와 형성평가, 수행과제를 정리했어요.',
    grade: 1, classes: [1, 2, 3, 4, 5, 6, 7],
    idRe: '^10[1-7](0[1-9]|[12][0-9]|30)$', idExample: '10101',
    idNote: '1학년 1~7반, 1~30번 학번(10101~10730)으로 들어올 수 있어요.',
    projectLabel: '단원 수행과제',
    glossaryExample: '관계대명사 what, 가정법 과거완료'
  };

  function materials(u) {
    return [
      ['PPT', 'Reading Text PPT L' + u, '본문 슬라이드'],
      ['PPT', 'Reading 해설 PPT L' + u, '문장 구조·어휘 해설'],
      ['PPT', 'Words PPT L' + u, 'Words in Use'],
      ['PPT', 'Grammar PPT L' + u, '문법 핵심 정리'],
      ['활동지', 'Reading Voca 어휘 L' + u, 'HWP'],
      ['PDF', '교과서 본문 L' + u, '본문 PDF']
    ];
  }
  function teacherMaterials(u) {
    return [
      ['지도서', '공통영어2 지도서 L' + u, '교사 전용 · PDF'],
      ['교과서', '교사용 교과서 L' + u, '교사 전용 · PDF'],
      ['평가', '단원 평가 L' + u, '교사 전용 · PDF'],
      ['평가', '서술형 평가 L' + u, '교사 전용 · PDF'],
      ['계획', '학습 목표 및 성취 기준 L' + u, '교사 전용 · HWP']
    ];
  }
  var RULE = 'AI 활용 범위: 어휘·문법 질문과 초안 피드백은 가능, 영어 글을 대신 써 주는 것은 불가';
  var STD = {
    '01-01': '말이나 글에 포함된 세부 정보를 파악한다.',
    '01-02': '말이나 글의 주제나 요지를 파악한다.',
    '01-03': '말이나 글의 분위기나 등장인물의 심정 및 의도 등을 추론한다.',
    '01-05': '말이나 글에 포함된 표현의 함축적 의미를 추론한다.',
    '01-07': '다양한 매체의 말이나 글을 비판적으로 이해한다.',
    '01-08': '말이나 글의 이해를 위한 적절한 전략을 적용한다.',
    '02-01': '실물, 그림, 사진, 도표 등을 활용하여 내용을 설명한다.',
    '02-02': '사실적 정보나 지식을 말이나 글로 전달한다.',
    '02-03': '경험이나 계획 등을 말하거나 기술한다.',
    '02-04': '자신의 생각이나 의견, 감정, 감상 등을 표현한다.',
    '02-06': '다양한 소통의 목적에 맞게 말하거나 글로 표현한다.',
    '02-08': '적절한 전략과 다양한 매체를 활용하여 상황과 목적에 맞게 말하거나 쓴다.'
  };
  function standards(codes) { return codes.map(function (c) { return ['[10공영2-' + c + ']', STD[c]]; }); }
  function code(c) { return '[10공영2-' + c + ']'; }

  window.UNITS = {
    1: {
      no: 'L1', name: 'Be Digitally Smart!', tone: 'cs',
      desc: '디지털 생활 습관과 가짜 뉴스를 다루며, 미디어 정보를 비판적으로 읽고 안전한 디지털 생활을 영어로 설명해요.',
      groups: [
        { name: '1. Build Comprehension', lessons: [['디지털 기기 사용 만화의 메시지 파악하기', ''], ['디지털 생활 대화 듣고 감정·세부 정보 파악하기', ''], ['디지털 발자국 강의 듣고 세부 정보 파악하기', '']] },
        { name: '2. Express Ideas', lessons: [['나쁜 디지털 습관 설명하고 도움 요청하기', ''], ['안전한 디지털 생활 픽토그램 만들고 설명하기', '']] },
        { name: '3. Expand Comprehension', lessons: [['Before Reading · 가짜 쿠폰 뉴스 보고 헤드라인 쓰기', ''], ['Reading · Warning: Fake News Alert!', '17~21']] },
        { name: '4. Words & Grammar', lessons: [['Words in Use · content, viral, confirm, credibility', '25'], ['Grammar · 동격의 that, so ~ that …', '26']] }
      ],
      standards: standards(['01-01', '01-07', '01-08', '02-01', '02-06', '02-08']),
      activities: [['짝 활동', '나의 디지털 습관 말하고 도움 요청하는 대화문 쓰기'], ['스스로', '안전한 디지털 생활 픽토그램 설명문 쓰기'], ['스스로', '가짜 뉴스 판별 체크리스트 영어로 만들기']],
      project: ['가짜 뉴스 예방 캠페인 포스터와 영어 발표문', ''], aiRule: RULE,
      materials: materials(1), teacherMaterials: teacherMaterials(1),
      questions: [
        { u: 'Words in Use', c: code('01-01'), q: '빈칸에 알맞은 말은?\nThe dance video went ______ and got two million views in three days.', o: ['viral', 'content', 'accidental', 'credible'], a: 0, e: 'go viral은 인터넷에서 급속도로 퍼진다는 뜻이에요.' },
        { u: 'Words in Use', c: code('01-01'), q: '다음 문장의 content와 같은 뜻으로 쓰인 것은?\nMy grandfather is content with his quiet life in the village.', o: ['만족하는', '내용물', '콘텐츠', '목차'], a: 0, e: 'be content with는 ‘~에 만족하다’라는 뜻의 형용사 용법이에요.' },
        { u: 'Grammar · 동격의 that', c: code('01-08'), q: 'that이 동격의 접속사로 쓰인 문장은?', o: ['The news that our team won the final made everyone happy.', 'This is the jacket that I bought last weekend.', 'I think that he will come back soon.', 'The song that she sang was beautiful.'], a: 0, e: '동격의 that 뒤에는 완전한 절이 오고, 앞의 추상 명사(news)의 내용을 구체적으로 설명해요.' },
        { u: 'Grammar · so ~ that …', c: code('01-08'), q: '빈칸에 알맞은 말을 순서대로 고르면?\nThe rumor spread ______ fast ______ nobody could stop it.', o: ['so – that', 'such – that', 'too – to', 'very – that'], a: 0, e: 'so+형용사/부사+that은 ‘너무 ~해서 …하다’라는 결과를 나타내요.' },
        { u: 'Reading · Fake News Alert!', c: code('01-07'), q: 'Which best describes fake news?', o: ['A deliberate attempt to mislead people with false information', 'A news article with a small spelling mistake', 'An opinion column written by a journalist', 'A breaking news story that is updated later'], a: 0, e: '가짜 뉴스는 부정확한 정보를 퍼뜨려 사람들을 속이려는 고의적인 시도예요.' },
        { u: 'Express Ideas', c: code('02-06'), q: '온라인에서 충격적인 기사를 보았을 때, 공유하기 전에 확인할 방법 두 가지를 영어 두 문장으로 쓰시오.', ans: 'I will check whether other reliable news outlets report the same story. I will also confirm the source and the date of the article before I share it.', e: '확인 방법이 구체적인지, 문장이 문법적으로 정확한지 확인해요.' }
      ]
    },
    2: {
      no: 'L2', name: 'Urgent Call From Earth', tone: 'data',
      desc: '기후 위기와 물 부족을 다룬 소설을 읽고 인물의 심정을 추론하며, 친환경 실천 계획을 영어로 발표해요.',
      groups: [
        { name: '1. Build Comprehension', lessons: [['기후 위기 뉴스 보고 짝과 대화하기', ''], ['뉴스 인터뷰 듣고 관계·세부 내용 파악하기', ''], ['기후 변화 강연 듣고 주제·세부 정보 파악하기', '']] },
        { name: '2. Express Ideas', lessons: [['친환경 생활 계획 세우고 강조하며 발표하기', ''], ['환경 문제 극복 방법 묻고 지식 전달하기', '']] },
        { name: '3. Expand Comprehension', lessons: [['Before Reading · 물 부족 영상으로 배경지식 활성화하기', ''], ['Reading · Dry', '41~45']] },
        { name: '4. Words & Grammar', lessons: [['Words in Use · be after, pull into, try one’s luck, a favor', '49'], ['Grammar · 관계대명사 what, 조건의 접속사', '50']] }
      ],
      standards: standards(['01-01', '01-02', '01-03', '01-08', '02-02', '02-03', '02-06']),
      activities: [['스스로', '나의 친환경 생활 계획 발표문 쓰기'], ['짝 활동', '환경 문제 해결 방법 묻고 답하는 대화문 쓰기'], ['스스로', '주인공의 심정 변화 정리하기']],
      project: ['기후 위기 속 하루를 그린 짧은 이야기 이어 쓰기', ''], aiRule: RULE,
      materials: materials(2), teacherMaterials: teacherMaterials(2),
      questions: [
        { u: 'Words in Use', c: code('01-01'), q: '빈칸에 알맞은 말은?\nWe ______ a rest area to buy some snacks.', o: ['pulled into', 'were after', 'tried our luck', 'returned a favor'], a: 0, e: 'pull into는 차량이 주정차를 위해 어떤 장소에 들어선다는 뜻이에요.' },
        { u: 'Words in Use', c: code('01-01'), q: 'Many fans are after the singer’s new album.에서 be after의 뜻은?', o: ['~을 찾거나 얻으려고 하다', '~을 뒤따라 걷다', '~보다 늦게 도착하다', '~을 포기하다'], a: 0, e: 'be after는 무언가를 찾거나 얻으려고 노력한다는 뜻이에요.' },
        { u: 'Grammar · 관계대명사 what', c: code('01-08'), q: '빈칸에 알맞은 말은?\n______ I need right now is a bottle of cold water.', o: ['What', 'That', 'Which', 'It'], a: 0, e: '선행사를 포함한 관계대명사 what(= the thing that)이 주어 역할을 해요.' },
        { u: 'Grammar · 조건의 접속사', c: code('01-08'), q: '우리말과 같도록 빈칸에 알맞은 말을 고르면?\n이 서류를 작성하지 않으면 동아리에 가입할 수 없어요.\nYou can’t join the club ______ you fill out this form.', o: ['unless', 'as long as', 'in case', 'provided that'], a: 0, e: 'unless는 ‘만일 ~하지 않으면’(= if ~ not)이라는 뜻이에요.' },
        { u: 'Reading · Dry', c: code('01-03'), q: 'In the story, how do the shoppers at the store feel after the water stops?', o: ['tense and impatient', 'calm and relaxed', 'cheerful and excited', 'bored and sleepy'], a: 0, e: '계산대 줄의 조급함과 얇은 예의 뒤에 숨은 적개심 같은 묘사에서 긴장된 분위기를 추론해요.' },
        { u: 'Express Ideas', c: code('02-03'), q: '가뭄으로 수돗물이 끊긴다면 무엇을 할지, 조건의 접속사(if 또는 unless)를 사용해 영어 두 문장으로 쓰시오.', ans: 'If the tap water stops, I will share my bottled water with my elderly neighbors. Unless we save water now, we may face the same crisis in the future.', e: '조건의 접속사를 바르게 썼는지, 조건절에 현재 시제를 썼는지 확인해요.' }
      ]
    },
    3: {
      no: 'L3', name: 'Rise Above Challenges', tone: 'algo',
      desc: '회복 탄력성에 관한 글을 읽고 역경을 이겨 내는 사고방식을 기르며, 걱정과 격려를 영어로 나눠요.',
      groups: [
        { name: '1. Build Comprehension', lessons: [['역경을 이기는 긍정적인 힘에 대해 이야기하기', ''], ['스트레스 관리법 대화 듣고 세부 정보 파악하기', ''], ['실패 주제 강의 요약하고 함축 의미 추론하기', '']] },
        { name: '2. Express Ideas', lessons: [['걱정 나누고 조언으로 고민 재구성하기', ''], ['긍정적 사고방식을 가진 인물 발표하며 격려하기', '']] },
        { name: '3. Expand Comprehension', lessons: [['Before Reading · 회복 탄력성 영상으로 배경지식 활성화하기', ''], ['Reading · Resilience: The Power to Overcome', '65~69']] },
        { name: '4. Words & Grammar', lessons: [['Words in Use · present, judge, embrace, stress', '73'], ['Grammar · 관계부사, 상관접속사', '74']] }
      ],
      standards: standards(['01-01', '01-05', '01-08', '02-02', '02-03', '02-04', '02-08']),
      activities: [['짝 활동', '걱정을 나누고 조언 주고받는 대화문 쓰기'], ['스스로', '역경을 이겨 낸 인물 소개 발표문 쓰기'], ['스스로', '나의 회복 탄력성 키우기 계획 세우기']],
      project: ['나의 역경 극복 경험을 담은 영어 에세이', ''], aiRule: RULE,
      materials: materials(3), teacherMaterials: teacherMaterials(3),
      questions: [
        { u: 'Words in Use', c: code('01-01'), q: 'present가 ‘현재의’라는 뜻으로 쓰인 문장은?', o: ['We should focus on the present situation.', 'She will present her idea to the class.', 'He gave me a present for my birthday.', 'Please present your ticket at the gate.'], a: 0, e: '명사 앞에서 ‘현재의’라는 뜻의 형용사로 쓰였어요.' },
        { u: 'Words in Use', c: code('01-01'), q: '빈칸에 알맞은 말은?\nOur team decided to ______ the challenge instead of avoiding it.', o: ['embrace', 'judge', 'relieve', 'cause'], a: 0, e: 'embrace a challenge는 도전을 받아들인다는 뜻이에요.' },
        { u: 'Grammar · 관계부사', c: code('01-08'), q: '빈칸에 알맞은 말은?\nI still remember the day ______ I first met my best friend.', o: ['when', 'where', 'why', 'how'], a: 0, e: '시간을 나타내는 선행사(the day) 뒤에는 관계부사 when을 써요.' },
        { u: 'Grammar · 상관접속사', c: code('01-08'), q: '빈칸에 알맞은 말을 순서대로 고르면?\nShe is ______ smart ______ also very kind.', o: ['not only – but', 'either – or', 'neither – nor', 'both – or'], a: 0, e: 'not only A but (also) B는 ‘A뿐만 아니라 B도’라는 뜻이에요.' },
        { u: 'Reading · Resilience', c: code('01-01'), q: 'What does resilience mean in the newsletter?', o: ['the ability to recover from difficulties and grow from them', 'the habit of avoiding difficult situations', 'a talent that only some people are born with', 'the power to control other people'], a: 0, e: '회복 탄력성은 어려움에 대처하고 회복하며 그 경험에서 배우고 성장하는 능력이에요.' },
        { u: 'Express Ideas', c: code('02-03'), q: '최근에 겪은 어려움 하나와 그것을 이겨 내기 위해 할 수 있는 일을 관계부사(when, where, why, how 중 하나)를 사용해 영어 두 문장으로 쓰시오.', ans: 'There was a time when I felt very stressed because of my exams. To overcome it, I made a study plan and talked with my friends about how I could manage my stress.', e: '관계부사와 선행사가 맞게 쓰였는지, 경험과 극복 방법이 구체적인지 확인해요.' }
      ]
    },
    4: {
      no: 'L4', name: 'Creative Ideas for a Better World', tone: 'ai',
      desc: '저렴한 종이 현미경 이야기를 읽고 과학의 접근성을 생각하며, 생활 속 문제의 창의적 해결 방안을 영어로 발표해요.',
      groups: [
        { name: '1. Build Comprehension', lessons: [['발명품을 만든 소녀 영상 보고 이야기하기', ''], ['창의적인 발명품 대화 듣고 세부 정보 파악하기', ''], ['공동체를 바꾼 소년의 강의 듣고 세부 정보 파악하기', '']] },
        { name: '2. Express Ideas', lessons: [['작은 아이디어로 변화를 이끈 사례 이야기하기', ''], ['문제 상황의 창의적 해결 방안 발표하기', '']] },
        { name: '3. Expand Comprehension', lessons: [['Before Reading · 발명가 영상 보고 코멘트 달기', ''], ['Reading · Science for All', '89~93']] },
        { name: '4. Words & Grammar', lessons: [['Words in Use · -able / -ous 형용사, face, prevent', '97'], ['Grammar · 가정법 과거완료, It ~ that 강조 구문', '98']] }
      ],
      standards: standards(['01-01', '01-08', '02-01', '02-04', '02-06', '02-08']),
      activities: [['짝 활동', '작은 아이디어가 만든 변화 사례 소개하기'], ['스스로', '폴드스코프의 장점 설명문 쓰기'], ['함께', '우리 동네 문제의 창의적 해결 방안 발표 자료 만들기']],
      project: ['더 나은 세상을 위한 발명 아이디어 영어 발표', ''], aiRule: RULE,
      materials: materials(4), teacherMaterials: teacherMaterials(4),
      questions: [
        { u: 'Words in Use', c: code('01-01'), q: '괄호 안의 단어를 알맞은 형태로 바꾸면?\nThis shop sells school bags at ______ prices. (afford)', o: ['affordable', 'affording', 'afforded', 'affordably'], a: 0, e: '동사 뒤에 -able이 붙으면 ‘~할 수 있는’이라는 뜻의 형용사가 돼요.' },
        { u: 'Words in Use', c: code('01-01'), q: 'infectious의 뜻으로 알맞은 것은?', o: ['전염성의', '부러워하는', '지속되는', '다양한'], a: 0, e: 'infect(감염시키다)에 -ous가 붙어 ‘전염성의’라는 뜻이 돼요.' },
        { u: 'Grammar · 가정법 과거완료', c: code('01-08'), q: '빈칸에 알맞은 말은?\nIf I ______ the bus, I would have arrived at school on time.', o: ['had not missed', 'did not miss', 'have not missed', 'would not miss'], a: 0, e: '과거 사실의 반대를 가정할 때 If+주어+had p.p., 주어+would have p.p.를 써요.' },
        { u: 'Grammar · It ~ that 강조', c: code('01-08'), q: '다음 문장에서 강조되는 말은?\nIt was at the science fair that I saw the paper microscope for the first time.', o: ['at the science fair', 'I', 'the paper microscope', 'for the first time'], a: 0, e: 'It was와 that 사이에 들어간 말이 강조돼요.' },
        { u: 'Reading · Science for All', c: code('01-01'), q: 'What problem was the Foldscope designed to solve?', o: ['Basic microscopes were too expensive for many areas.', 'Microscopes could not show bacteria.', 'Scientists had too many microscopes to manage.', 'Paper was hard to find in many countries.'], a: 0, e: '비용 때문에 기본적인 현미경조차 쓰기 어려운 지역의 문제를 해결하려고 만들었어요.' },
        { u: 'Express Ideas', c: code('02-04'), q: '폴드스코프가 발명되지 않았다면 어떤 일이 있었을지 가정법 과거완료를 사용해 영어 한 문장으로 쓰고, 그 이유를 한 문장 덧붙이시오.', ans: 'If the Foldscope had not been invented, many students in poor areas could not have looked at tiny living things. This is because ordinary microscopes are too expensive for their schools.', e: '가정법 과거완료의 형태(had p.p. / could have p.p.)와 이유의 연결을 확인해요.' }
      ]
    }
  };

  // AI 키가 연결되지 않았을 때 쓰는 간단한 학습 사전
  window.GLOSSARY = [
    [['동격', '동격의 that', 'fact that', 'news that'], '동격의 that은 fact, news, idea 같은 추상 명사 뒤에서 그 내용을 설명하는 완전한 절을 이끌어요.\n예) The news that she won the prize surprised us.'],
    [['so ~ that', 'so that', 'such', '너무 ~해서'], 'so+형용사/부사+that …은 ‘너무 ~해서 …하다’, such (a/an)+형용사+명사+that …도 같은 뜻이에요.\n예) It was so cold that we stayed inside.'],
    [['관계대명사 what', 'what', '~하는 것'], '관계대명사 what은 선행사를 포함해 ‘~하는 것’(= the thing that)이라는 뜻이고, 앞에 선행사를 쓰지 않아요.\n예) What I want is a little rest.'],
    [['조건', 'unless', 'if', 'in case', 'as long as', 'provided'], '조건의 접속사에는 if, unless(~하지 않으면), in case(~하는 경우에 대비해), as long as(~하는 한) 등이 있어요. 조건절에서는 미래 일도 현재 시제로 써요.'],
    [['관계부사', 'when', 'where', 'why', 'how', 'the way'], '관계부사는 선행사에 따라 when(시간), where(장소), why(이유), how(방법)를 써요. the way와 how는 함께 쓰지 않아요.'],
    [['상관접속사', 'not only', 'either', 'neither', 'both'], '상관접속사는 짝을 이뤄 쓰여요. not only A but (also) B, either A or B, neither A nor B, both A and B. 연결되는 말은 같은 형태로 맞춰요.'],
    [['가정법', '과거완료', 'had p.p', 'would have'], '가정법 과거완료는 과거 사실의 반대를 가정해요. If+주어+had p.p., 주어+would/could/might have p.p.\n예) If I had studied harder, I would have passed.'],
    [['강조', 'it ~ that', 'it was', 'it is'], 'It is[was] ~ that 강조 구문은 주어, 목적어, 부사(구)를 It is[was]와 that 사이에 넣어 강조해요.\n예) It was Tom that broke the window.'],
    [['viral', 'content', 'credibility', 'confirm'], 'viral은 ‘급속도로 확산되는’, content는 ‘내용(물)’ 또는 ‘만족하는’, credibility는 ‘신뢰성’, confirm은 ‘확인하다’라는 뜻이에요.'],
    [['be after', 'pull into', 'try one', 'favor', 'bring out'], 'be after는 ‘~을 찾다·얻으려 하다’, pull into는 ‘(차가) ~에 들어서다’, try one’s luck은 ‘운을 시험해 보다’, return a favor는 ‘은혜를 갚다’라는 뜻이에요.'],
    [['present', 'judge', 'embrace', 'stress'], 'present는 ‘현재의’(형용사)와 ‘제시하다’(동사), judge는 ‘판단하다’(동사)와 ‘판사, 심사위원’(명사)으로 쓰여요. embrace a challenge는 ‘도전을 받아들이다’예요.'],
    [['-able', '-ous', 'affordable', 'infectious', 'prevent', 'face'], '동사+-able은 ‘~할 수 있는’(affordable, reliable), 동사+-ous는 그 성질을 가진(infectious, continuous) 형용사가 돼요. face a challenge, prevent the spread처럼 어울리는 말과 함께 익혀요.'],
    [['가짜 뉴스', 'fake news', '미디어', '리터러시'], '가짜 뉴스는 사람들을 속이려고 부정확한 정보를 고의로 퍼뜨리는 것이에요. 출처, 날짜, 다른 언론의 보도를 확인한 뒤 공유해요.'],
    [['디지털 발자국', 'digital footprint', '디지털 습관'], '디지털 발자국은 온라인 활동이 남긴 기록이에요. 한번 올린 정보는 지우기 어려우니 개인 정보와 사진을 올리기 전에 한 번 더 생각해요.'],
    [['기후', '가뭄', 'drought', '물 부족'], '기후 변화로 가뭄과 물 부족이 심해지고 있어요. 물 절약, 에너지 절약, 일회용품 줄이기처럼 생활 속에서 실천할 수 있는 일을 찾아봐요.'],
    [['회복 탄력성', 'resilience', '역경', '스트레스'], '회복 탄력성(resilience)은 어려움에 대처하고 회복하며 그 경험에서 성장하는 힘이에요. 도움을 주는 관계와 긍정적인 사고가 이를 키워 줘요.'],
    [['폴드스코프', 'foldscope', '현미경', '발명'], '폴드스코프는 종이로 만든 저렴한 현미경이에요. 비용 때문에 과학 도구를 쓰기 어려운 사람들도 과학을 탐구할 수 있게 하자는 생각에서 나왔어요.']
  ];
})();
