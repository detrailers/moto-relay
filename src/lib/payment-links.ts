export const paymentLinks = {
  195: "https://www.eprocessingnetwork.com/cgi-bin/epn/secure/pfg/payment.fpl?a=0608463&f=CD634F0D-6C9F-1014-BC5A-8246451BCF87",
  245: "https://www.eprocessingnetwork.com/cgi-bin/epn/secure/pfg/payment.fpl?a=0608463&f=BAED9305-6D2C-1014-879D-88A3CE320BF7",
  295: "https://www.eprocessingnetwork.com/cgi-bin/epn/secure/pfg/payment.fpl?a=0608463&f=1FE4C706-6D2D-1014-A066-C5A11B4EEA0E",
} as const;

export const supportedDepositAmounts = Object.keys(paymentLinks).map(Number);

export function getPaymentLink(amount: string | number) {
  const normalizedAmount = Number(amount);
  return paymentLinks[normalizedAmount as keyof typeof paymentLinks] ?? null;
}
