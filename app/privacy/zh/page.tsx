import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              SAT20 Wallet 隐私政策
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. 总述</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                本隐私政策描述了 SAT20 Wallet（以下称&ldquo;我们&rdquo;或&ldquo;本应用&rdquo;）如何收集、使用、共享及存储使用我们网站、浏览器扩展、移动应用或其他服务（统称&ldquo;服务&rdquo;）的用户的个人信息。
              </p>
              <p className="text-gray-700 leading-relaxed">
                使用本服务即表示您接受本隐私政策及相关服务条款。如果您不同意其中任何内容，请立即停止使用。
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. 我们收集的信息</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                我们可能收集以下类型的信息：
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>区块链网络信息：</strong>公开可获取的地址、交易记录、资产信息（不包含私钥或助记词）。</li>
                <li><strong>联系信息：</strong>如电子邮件地址（仅在用户自愿提供的情况下）。</li>
                <li><strong>反馈与通信：</strong>您在提交问题、参与调查、联系客服时提供的内容。</li>
                <li><strong>使用数据：</strong>包括访问时间、功能点击次数、页面停留时间等。</li>
                <li><strong>设备信息：</strong>如浏览器类型、版本、操作系统类型等技术信息。</li>
                <li><strong>营销偏好：</strong>在您同意的情况下，我们会记录您与营销邮件的交互情况（如打开、点击）。</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cookie 使用说明</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                我们可能在网站或应用中使用 Cookie 和类似技术（如本地存储、像素标签）以实现以下目的：
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>保持登录状态与用户偏好设置；</li>
                <li>分析用户行为，以优化服务体验；</li>
                <li>提供个性化内容与推荐；</li>
                <li>统计访问量与转化效果。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                您可通过浏览器设置拒绝或删除 Cookie，但这可能影响部分功能的正常使用。
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. 第三方 SDK 使用说明</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                我们的服务可能集成第三方 SDK（软件开发工具包）以提供特定功能，例如数据分析、崩溃报告或支付处理。常见的第三方 SDK 可能包括但不限于：
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>分析工具 SDK</strong>（例如 Google Analytics）：用于统计访问数据与用户交互。</li>
                <li><strong>崩溃监控 SDK</strong>（例如 Sentry）：用于错误日志收集与问题诊断。</li>
                <li><strong>支付 SDK</strong>（如第三方比特币支付网关）：用于资产充值、提现或跨链操作。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                这些 SDK 可能会收集您的设备信息、使用数据等。我们会尽量限制其收集范围，并要求它们遵守相关隐私法规。
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. 我们如何使用信息</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                我们使用收集的信息来：
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>提供、维护与改进服务；</li>
                <li>支持跨链、通道、资产管理等功能；</li>
                <li>回复您的咨询与反馈；</li>
                <li>防范安全风险与滥用行为；</li>
                <li>符合法律法规要求；</li>
                <li>在您同意的情况下，用于营销推广与个性化推荐。</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. 信息共享</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                我们不会向第三方出售您的个人信息。但在以下情况下，我们可能共享您的信息：
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>与受信任的关联公司或服务提供商；</li>
                <li>发生业务合并、收购或资产转让；</li>
                <li>遵守法律、执法机构或司法程序的要求。</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. 信息安全与存储</h2>
              <p className="text-gray-700 leading-relaxed">
                我们采取合理的技术与管理措施保护信息安全，但无法保证数据在互联网上的绝对安全。信息会在实现收集目的所需的最短时间内保留，除非法律要求延长保存期限。
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. 儿童隐私</h2>
              <p className="text-gray-700 leading-relaxed">
                我们的服务不针对 16 岁以下儿童。如发现我们收集了该年龄段的个人信息，我们会立即删除。
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. GDPR 与国际用户权益</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                如您位于欧盟或其他适用地区，您有权请求访问、更正、删除您的数据，或限制、反对数据处理，并要求数据可携带性。您可通过 <a href="mailto:support@sat20.org" className="text-blue-600 hover:text-blue-800 underline">support@sat20.org</a> 联系我们行使权利。
              </p>
            </section>

            {/* Section 9A */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9A. 欧盟 / EEA 特定条款</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">(1) 合法处理依据（Lawful Bases for Processing）</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    我们处理您的个人数据基于以下法律依据：
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>您的明确同意；</li>
                    <li>为履行与您的合同或在签订合同前采取的措施所必需；</li>
                    <li>遵守法律义务；</li>
                    <li>保护您的重大利益；</li>
                    <li>为公共利益执行任务或行使官方权力；</li>
                    <li>为实现我们的合法利益（且不侵犯您的基本权利和自由）。</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">(2) 数据主体权利（Your Rights under GDPR）</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    您有权：
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>访问权：</strong>获取我们持有的您的个人数据副本；</li>
                    <li><strong>更正权：</strong>要求更正不准确或不完整的数据；</li>
                    <li><strong>删除权（被遗忘权）：</strong>在法律允许的情况下要求删除数据；</li>
                    <li><strong>限制处理权：</strong>在特定情况下限制数据处理；</li>
                    <li><strong>反对处理权：</strong>在我们基于合法利益或直接营销的处理上提出异议；</li>
                    <li><strong>数据可携带权：</strong>以结构化、通用、机器可读的格式获取数据并转移至其他控制者。</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">(3) 国际数据传输（International Data Transfers）</h3>
                  <p className="text-gray-700 leading-relaxed">
                    如需将您的个人数据传输至欧盟/EEA 以外的国家，我们将采取适当的保障措施，例如签署欧盟标准合同条款（SCCs），以确保您的数据获得等同于欧盟标准的保护。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">(4) 数据保护官（DPO）</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    如您对 GDPR 下的权利或我们的数据处理有疑问，可联系：
                  </p>
                  <p className="text-gray-700">
                    Email: <a href="mailto:dpo@sat20.org" className="text-blue-600 hover:text-blue-800 underline">dpo@sat20.org</a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">(5) 投诉权利（Right to Lodge a Complaint）</h3>
                  <p className="text-gray-700 leading-relaxed">
                    如果您认为我们违反了 GDPR，您有权向所在欧盟成员国的数据保护机构（DPA）提出投诉。欧盟各国 DPA 列表可在此获取：<a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Our Members | European Data Protection Board</a>
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. 隐私政策变更</h2>
              <p className="text-gray-700 leading-relaxed">
                我们可能不时更新本政策。重大变更将通过更新&ldquo;最后更新&rdquo;日期并在必要时提前通知您。继续使用服务即表示您同意新的政策内容。
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. 联系方式</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                如有关于本隐私政策的问题，请联系：
              </p>
              <p className="text-gray-700">
                Email: <a href="mailto:support@sat20.org" className="text-blue-600 hover:text-blue-800 underline">support@sat20.org</a>
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              最后更新：{new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
