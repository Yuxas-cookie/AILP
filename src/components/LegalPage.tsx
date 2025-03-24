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

export function LegalPage() {
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
            特定商取引法に基づく表記
          </h2>
          <table className="w-full">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-4 pr-4 align-top font-medium text-gray-900 w-1/4">事業者名</td>
                <td className="py-4 text-gray-700">株式会社SKH</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 align-top font-medium text-gray-900">代表取締役</td>
                <td className="py-4 text-gray-700">片山弘</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 align-top font-medium text-gray-900">所在地</td>
                <td className="py-4 text-gray-700">
                  〒565-0842<br />
                  大阪府吹田市千里山東２丁目４−３<br />
                  リバーサイド千里山 201号室
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-4 align-top font-medium text-gray-900">連絡先</td>
                <td className="py-4 text-gray-700">sekaino.hiroshi34@gmail.com</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 align-top font-medium text-gray-900">受付時間</td>
                <td className="py-4 text-gray-700">公式ラインにて24時間受け付けております</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 align-top font-medium text-gray-900">運営統括責任者</td>
                <td className="py-4 text-gray-700">片山弘</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 align-top font-medium text-gray-900">ホームページURL</td>
                <td className="py-4 text-gray-700">https://www.aienger.net/</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
            サービスに関する表記
          </h2>
          <table className="w-full">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-4 pr-4 align-top font-medium text-gray-900 w-1/4">販売価格</td>
                <td className="py-4 text-gray-700">77万円（税込）</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 align-top font-medium text-gray-900">支払方法</td>
                <td className="py-4 text-gray-700">
                  銀行振込<br />
                  クレジットカード決済
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-4 align-top font-medium text-gray-900">支払時期</td>
                <td className="py-4 text-gray-700">
                  お申込み後、30日以内にお支払いをお願いいたします。
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-4 align-top font-medium text-gray-900">サービス内容</td>
                <td className="py-4 text-gray-700">
                  AIエンジニア育成プログラム<br />
                  （オンライン講座・実践会・個別サポート）
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-4 align-top font-medium text-gray-900">提供期間</td>
                <td className="py-4 text-gray-700">180日間</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 align-top font-medium text-gray-900">返品・キャンセル</td>
                <td className="py-4 text-gray-700">契約後8日以内のクーリングオフ期間あり</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 align-top font-medium text-gray-900">商品引渡し時期</td>
                <td className="py-4 text-gray-700">
                  お支払いと契約書の確認後にすぐにサービスをご利用いただけます
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-4 align-top font-medium text-gray-900">動作環境</td>
                <td className="py-4 text-gray-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li>インターネット接続環境</li>
                    <li>Webブラウザ（Google Chrome推奨）</li>
                    <li>Zoomアプリケーション</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </motion.div>
    </div>
  );
}