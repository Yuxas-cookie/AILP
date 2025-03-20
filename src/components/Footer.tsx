import React from 'react';
import { motion } from 'framer-motion';

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

export function Footer() {
  return (
    <motion.footer
      className="py-12 px-4 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="text-sm text-gray-600">
              <h6 className="font-bold text-gray-900 mb-4">特定商取引法に基づく表記</h6>
              <table className="w-full">
                <tbody className="space-y-2">
                  <tr>
                    <td className="py-2 pr-4 align-top font-medium">事業者名</td>
                    <td className="py-2">株式会社SKH</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 align-top font-medium">代表取締役</td>
                    <td className="py-2">片山弘</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 align-top font-medium">所在地</td>
                    <td className="py-2">〒565-0842<br />大阪府吹田市千里山東２丁目４−３<br />リバーサイド千里山 201号室</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 align-top font-medium">連絡先</td>
                    <td className="py-2">sekaino.hiroshi34@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 align-top font-medium">受付時間</td>
                    <td className="py-2">公式ラインにて24時間受け付けております</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
            <motion.div variants={itemVariants} className="text-sm text-gray-600">
              <h6 className="font-bold text-gray-900 mb-4">サービスに関する表記</h6>
              <table className="w-full">
                <tbody className="space-y-2">
                  <tr>
                    <td className="py-2 pr-4 align-top font-medium">販売価格</td>
                    <td className="py-2">77万円（税込）</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 align-top font-medium">支払方法</td>
                    <td className="py-2">銀行振込<br />クレジットカード決済</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 align-top font-medium">サービス内容</td>
                    <td className="py-2">AIエンジニア育成プログラム<br />（オンライン講座・実践会・個別サポート）</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 align-top font-medium">提供期間</td>
                    <td className="py-2">180日間</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 align-top font-medium">返品・キャンセル</td>
                    <td className="py-2">契約後8日以内のクーリングオフ期間あり</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}