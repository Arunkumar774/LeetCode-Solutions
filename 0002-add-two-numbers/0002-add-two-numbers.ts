/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let l3: ListNode | null = new ListNode(0);
    let rear: ListNode | null = l3;
    let carry: number = 0;
    while (l1 !== null || l2!== null || carry > 0) {
        const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        const value = sum > 9 ? sum % 10 : sum;
        const newNode = new ListNode(value);
        rear.next = newNode;
        rear = newNode;
        carry = sum > 9 ? 1 : 0;
        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
    }
    return l3.next;
};