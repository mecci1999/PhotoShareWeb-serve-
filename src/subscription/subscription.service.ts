import { connection } from '../app/database/mysql';
import { SubscriptionModel } from './subscription.model';

/**
 * 创建订阅
 */
export const createSubscription = async (subscription: SubscriptionModel) => {
  // 准备查询
  const statement = `
    INSERT INTO subscription
    SET ?
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement, subscription);

  // 提供数据
  return data as any;
};

/**
 * 更新订阅
 */
export const updateSubscription = async (
  subscriptionId: number,
  subscription: SubscriptionModel,
) => {
  // 准备查询
  const statement = `
    UPDATE subscription
    SET ?
    WHERE subscription.id = ?
  `;

  // 执行查询
  const [data] = await connection
    .promise()
    .query(statement, [subscription, subscriptionId]);

  // 提供数据
  return data as any;
};
