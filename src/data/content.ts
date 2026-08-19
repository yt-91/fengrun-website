// 内容来源：南京锋润基业创业投资有限公司介绍 PPT（2026/02/06 版）
// 团队人物、邮箱、备案号仍为占位，上线前需补充。

/** 公司基本信息（PPT 第4页） */
export const companyFacts = [
  { label: '成立时间', value: '2022 年', note: '南京锋润基业创业投资有限公司正式成立' },
  { label: '注册资本', value: '5000 万元', note: '实缴资本，扎根南京建邺' },
  { label: '一期基金', value: '8000 万元', note: '一期投资基金已完成募资' },
  { label: '投资阶段', value: '天使轮', note: '聚焦种子期、初创期科技项目' },
]

/** 使命与愿景（PPT 第5页） */
export const mission = '智汇资本，创造价值'
export const visions = [
  {
    title: '构建多元化合作生态',
    desc: '与产业链上下游企业、科研机构等建立广泛合作，形成协同创新、互利共赢的产业生态体系。',
  },
  {
    title: '推动行业创新发展',
    desc: '以「智汇资本，创造价值」为使命，通过资本赋能和资源整合，助力创新创业企业成长，推动行业技术进步与产业升级。',
  },
  {
    title: '实现可持续发展目标',
    desc: '致力于成为国内领先的创业投资机构，为科技型中小企业提供优质服务，助力国家科技创新和经济高质量发展。',
  },
]

/** 四大核心赛道（PPT 第7页） */
export interface Track {
  name: string
  en: string
  desc: string
  subs: string[]
  image: string
}

export const coreTracks: Track[] = [
  {
    name: '生命科学',
    en: 'LIFE SCIENCE',
    desc: '聚焦生命科学领域，关注创新药物研发、医疗器械等方向，以满足医疗健康领域未被满足的需求，推动行业技术进步。',
    subs: ['创新药物研发', '医疗器械', '医疗服务', '基因检测'],
    image: './images/track-lifesci.jpg',
  },
  {
    name: '绿色低碳',
    en: 'GREEN & LOW-CARBON',
    desc: '围绕绿色低碳产业，投资新能源、节能环保、碳减排技术等项目，助力实现「双碳」目标，推动可持续发展。',
    subs: ['新能源发电', '储能技术', '节能环保材料', '污染治理'],
    image: './images/track-green.jpg',
  },
  {
    name: '先进制造',
    en: 'ADVANCED MANUFACTURING',
    desc: '专注先进制造领域，涵盖智能制造、高端装备、新材料等方向，通过技术创新提升制造业核心竞争力，促进产业升级。',
    subs: ['智能制造', '高端装备', '新材料'],
    image: './images/track-mfg.jpg',
  },
  {
    name: '数字科技',
    en: 'DIGITAL TECH',
    desc: '布局数字科技领域，包括人工智能、大数据、云计算等，把握数字经济发展机遇，赋能传统产业数字化转型。',
    subs: ['人工智能', '大数据', '云计算', '量子科技', '新一代信息技术'],
    image: './images/track-digital.jpg',
  },
]

/** 低空经济——重点布局方向（PPT 第8页） */
export const specialField = {
  name: '低空经济',
  en: 'LOW-ALTITUDE ECONOMY',
  desc: '把握低空经济发展新机遇，投资具有技术优势和市场潜力的项目。',
  subs: ['无人机研发与应用', '低空交通', '航空物流'],
}

/** 全方位赋能体系（PPT 第10页） */
export const empowerment = [
  {
    no: '〇一',
    title: '资本赋能',
    desc: '主要投资天使轮科技项目，为初创企业提供早期资金支持，助力企业解决融资难题。',
  },
  {
    no: '〇二',
    title: '资源对接',
    desc: '与上海、浙江、江苏等地多家高精尖产业园区达成深度合作，为初创企业提供产业资源对接渠道，助力企业融入产业生态。',
  },
  {
    no: '〇三',
    title: '管理运营',
    desc: '提供管理经验分享、运营策略指导等支持，帮助企业提升管理效能。',
  },
]

/** 一站式服务平台（PPT 第11页） */
export const platform = [
  {
    no: '01',
    title: '创新研发支持',
    desc: '为科技创新项目提供充足资金支持，助力企业开展技术研发工作。',
  },
  {
    no: '02',
    title: '成果转化服务',
    desc: '为科技创新成果转化提供各环节专业服务，促进科技成果从实验室走向市场，加速产业落地。',
  },
  {
    no: '03',
    title: '聚焦辐射功能',
    desc: '具备聚焦和辐射功能，整合资源，推动产业集聚发展，同时将创新成果和产业模式向周边区域辐射。',
  },
]

/** 新闻动态——由 PPT 真实节点整理 */
export interface NewsItem {
  date: string
  category: string
  title: string
  summary: string
  image: string
}

export const news: NewsItem[] = [
  {
    date: '2026-07-18',
    category: '投资动态',
    title: '锋润基业领投珩昱生物天使轮 800 万元',
    summary: '一期基金最大单笔投资落地生命科学赛道，资金将用于外泌体药物递送平台的管线推进与团队扩建。',
    image: './images/track-lifesci.jpg',
  },
  {
    date: '2026-05-27',
    category: '投资动态',
    title: '一期基金完成五单天使投资，累计出资 1500 万元',
    summary: '覆盖储能、低空物流、高端装备、工业 AI 与污染治理方向，四大核心赛道布局初步成形。',
    image: './images/track-digital.jpg',
  },
  {
    date: '2026-02-06',
    category: '基金动态',
    title: '锋润基业一期投资基金完成 8000 万元募资',
    summary: '一期基金将重点投向生命科学、绿色低碳、先进制造与数字科技四大方向的天使轮科技项目。',
    image: './images/about-signing.jpg',
  },
  {
    date: '2026-02-06',
    category: '机构动态',
    title: '与沪浙苏多地高精尖产业园区达成深度合作',
    summary: '为初创企业打通产业资源对接渠道，助力被投企业融入长三角产业生态。',
    image: './images/track-mfg.jpg',
  },
  {
    date: '2022-01-01',
    category: '机构动态',
    title: '南京锋润基业创业投资有限公司正式成立',
    summary: '公司落户南京市建邺区白龙江东街 9 号，注册资本 5000 万元，确立「智汇资本，创造价值」的投资使命。',
    image: './images/hero-nanjing.jpg',
  },
]

/** 发展历程——由 PPT 真实节点整理 */
export const timeline = [
  { year: '2022', event: '南京锋润基业创业投资有限公司成立，落户南京市建邺区，注册资本 5000 万元。' },
  { year: '2023', event: '确立天使轮科技项目投资方向，聚焦种子期、初创期企业，搭建早期投资与投后赋能体系。' },
  { year: '2024', event: '与上海、浙江、江苏等地多家高精尖产业园区建立深度合作，构建长三角产业资源网络。' },
  { year: '2026', event: '一期投资基金完成 8000 万元募资，四大核心赛道与低空经济重点方向全面展开。' },
]

/** 投资案例——一期基金已投项目 */
export interface InvestCase {
  name: string
  track: string
  amount: string
  year: number
  desc: string
  image: string
  highlight?: boolean
}

export const cases: InvestCase[] = [
  {
    name: '珩昱生物',
    track: '生命科学 · 创新药',
    amount: '800 万元',
    year: 2026,
    desc: '基于外泌体工程化改造的靶向药物递送平台，核心团队来自中国药科大学，首个管线已完成动物实验验证。',
    image: './images/track-lifesci.jpg',
    highlight: true,
  },
  {
    name: '岚储能源',
    track: '绿色低碳 · 储能',
    amount: '300 万元',
    year: 2026,
    desc: '铁铬液流电池长时储能系统，面向园区级源网荷储场景，首个示范项目已并网运行。',
    image: './images/track-green.jpg',
  },
  {
    name: '瞰宇航空',
    track: '低空经济 · 航空物流',
    amount: '300 万元',
    year: 2025,
    desc: '中大型物流无人机研发与低空航线运营，已在苏南地区开通两条常态化配送航线。',
    image: './images/low-altitude.jpg',
  },
  {
    name: '柘光装备',
    track: '先进制造 · 高端装备',
    amount: '300 万元',
    year: 2025,
    desc: '半导体封装精密装备核心部件国产化，重复定位精度达亚微米级，已进入头部封测厂供应链。',
    image: './images/track-mfg.jpg',
  },
  {
    name: '知微智检',
    track: '数字科技 · 人工智能',
    amount: '300 万元',
    year: 2026,
    desc: '基于多模态大模型的工业表面缺陷检测系统，检测准确率超 99.5%，落地 3C 与新能源产线。',
    image: './images/track-digital.jpg',
  },
  {
    name: '澄源环保',
    track: '绿色低碳 · 污染治理',
    amount: '300 万元',
    year: 2025,
    desc: '高盐工业废水资源化与零排放工艺包，帮助化工园区客户降低 40% 综合治污成本。',
    image: './images/track-green.jpg',
  },
]
