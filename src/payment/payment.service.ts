import { connection } from '../app/database/mysql';
import { paymentModel, PaymentStatus } from './payment.model';

/**
 * 获取支付方法
 */
export interface GetPaymentsOptions {
  status?: PaymentStatus;
}

export const getPayments = async (options: GetPaymentsOptions = {}) => {
  // 解构数据
  const { status = 'published' } = options;

  // 准备查询
  const statement = `
    SELECT
      payment.id,
      payment.name,
      payment.title,
      payment.description,
      payment.meta
    FROM
      payment
    WHERE
      payment.status = ?
    ORDER BY payment.index ASC 
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement, status);

  // 提供数据
  return data as paymentModel;
};
