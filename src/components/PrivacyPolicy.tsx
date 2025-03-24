import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4">
      <motion.div
        className="container mx-auto max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          variants={itemVariants}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          トップページに戻る
        </motion.button>

        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
            プライバシーポリシー
          </h2>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. はじめに</h3>
              <p className="text-gray-700 leading-relaxed">
                当サイト（以下「本サイト」といいます）は、利用者のプライバシー保護の重要性を認識し、個人情報の適正な取扱いに努めています。本プライバシーポリシーは、本サイトが収集する情報、その利用目的、管理方法、第三者提供に関する基本的な方針を定めたものです。
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. 個人情報の取得</h3>
              <p className="text-gray-700 leading-relaxed">
                本サイトでは、以下の方法で個人情報を取得することがあります：
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700 ml-4">
                <li>お問い合わせフォームやメール等を通じた情報提供</li>
                <li>サービス登録やアンケートへのご回答</li>
                <li>アクセス解析ツール等による自動的な情報収集（IPアドレス、ブラウザ情報、アクセス日時など）</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. 個人情報の利用目的</h3>
              <p className="text-gray-700 leading-relaxed">
                取得した個人情報は、以下の目的で利用いたします：
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700 ml-4">
                <li>お問い合わせへの対応、サービス提供および改善</li>
                <li>利用者への必要な情報のご連絡（例：お知らせ、更新情報、キャンペーン情報等）</li>
                <li>アクセス解析および統計データの作成</li>
                <li>その他、明示した利用目的に沿った範囲内での利用</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">4. 個人情報の第三者提供</h3>
              <p className="text-gray-700 leading-relaxed">
                本サイトは、以下の場合を除き、事前に利用者の同意を得ることなく個人情報を第三者に提供することはありません：
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700 ml-4">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要な場合で、本人の同意を得ることが困難な場合</li>
                <li>公衆衛生の向上や児童の健全な育成の推進のために特に必要な場合で、本人の同意を得ることが困難な場合</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">5. 個人情報の管理</h3>
              <p className="text-gray-700 leading-relaxed">
                本サイトは、個人情報の漏洩、滅失、改ざん、不正アクセス等を防止するため、適切な安全管理措置を講じます。また、取り扱う個人情報の正確性を保ち、必要な期間のみ保存するよう努めます。
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">6. 個人情報の開示、訂正、削除、利用停止</h3>
              <p className="text-gray-700 leading-relaxed">
                利用者ご自身の個人情報について、開示、訂正、削除または利用停止をご希望の場合は、下記のお問い合わせ窓口までご連絡ください。なお、本人確認のための手続きが必要な場合がございます。
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">7. クッキー（Cookie）について</h3>
              <p className="text-gray-700 leading-relaxed">
                本サイトでは、利用者の利便性向上およびサイトの品質向上のため、クッキーを使用する場合があります。利用者は、ブラウザの設定によりクッキーの受け入れを拒否することができますが、その場合、当サイトの一部サービスが正常にご利用いただけないことがあります。
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">8. プライバシーポリシーの変更</h3>
              <p className="text-gray-700 leading-relaxed">
                本プライバシーポリシーは、法令等の改正や当サイトのサービス内容の変更に伴い、予告なく変更されることがあります。変更後の内容は、本サイトに掲載された時点で効力を発生するものとします。
              </p>
            </section>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}