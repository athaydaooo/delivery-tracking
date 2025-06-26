# **📦 Delivery Tracking API**  

Um microsserviço de **rastreamento de entregas (last-mile delivery)** com:  
- **API REST** para gestão de pedidos.  
- **WebSockets** para atualizações em tempo real.  
- **Mensageria com RabbitMQ** (event-driven).  
- **PostgreSQL** (banco relacional) + **Redis** (cache).  
- **Observabilidade**: Logs estruturados (Winston) + Prometheus/Grafana.  
- **Pronto para Docker** (compose com múltiplos serviços).  

---

## **🚀 Como Executar**  

### **Pré-requisitos**  
- Docker e Docker Compose instalados.  
- Node.js 18+.  

### **Passos**  
1. **Clone o repositório**:  
   ```bash  
   git clone https://github.com/athaydaooo/delivery-tracking.git  
   cd delivery-tracking  
   ```  

2. **Configure as variáveis de ambiente**:  
   - Crie um arquivo `.env` na raiz (baseado em `.env.example`).  

3. **Suba os containers**:  
   ```bash  
   docker-compose up -d  
   ```  

4. **Acesse os serviços**:  
   - **API NestJS**: `http://localhost:3000`  
   - **RabbitMQ UI**: `http://localhost:15672` (usuário: `root`, senha: `toor`)  
---

## **🔍 Endpoints da API**  

### **Pedidos**  
- **`POST /orders`**: Cria um novo pedido.  
  ```json  
  { "customerId": "123", "status": "PENDING" }  
  ```  
- **`PATCH /orders/:id/status`**: Atualiza status do pedido.  
  ```json  
  { "status": "IN_TRANSIT" }  
  ```  

### **WebSocket**  
- Conecte-se em `ws://localhost:3000/tracking` para receber atualizações em tempo real.  

### **Health Check**  
- **`GET /health`**: Verifica status dos serviços (PostgreSQL, RabbitMQ).  

---

## **🛠️ Tecnologias**  
- **Backend**: NestJS, TypeORM, RabbitMQ.  
- **Banco de Dados**: PostgreSQL, Redis.  
- **Observabilidade**: Winston, Prometheus, Grafana.  
- **Infraestrutura**: Docker, Docker Compose.  

---

## **✅ Qualidade de Código**

Este projeto utiliza **Husky** e **Commitlint** para garantir a qualidade dos commits:

- **Husky**: Automatiza hooks do Git, como validação de mensagens de commit antes de finalizar (`pre-commit`, `commit-msg` etc).
- **Commitlint**: Valida se as mensagens de commit seguem o padrão convencional (Conventional Commits).

Ao tentar realizar um commit, a mensagem será checada automaticamente. Caso não esteja no padrão, o commit será rejeitado.

**Exemplo de mensagem válida:**
```
feat(order): adiciona endpoint para criação de pedidos
```

---

## **🧪 Testes**  
```bash  
# Testes unitários  
pnpm run test  

# Testes E2E  
pnpm run test:e2e  
```  

---

## **📌 Decisões Técnicas**  
1. **Arquitetura**:  
   - Separação em módulos (Orders, Events, Tracking).  
   - Event-driven com RabbitMQ para desacoplamento.  

2. **Escalabilidade**:  
   - Redis para cache e rate limiting.  
   - WebSocket para notificações em tempo real.  

3. **Observabilidade**:  
   - Logs centralizados com Winston.  
   - Métricas com Prometheus + Grafana.  

---

## **📄 Licença**

Este projeto está licenciado sob a licença [MIT](LICENSE).  
Você pode usar, modificar e distribuir livremente, desde que mantenha os créditos aos autores originais.


--- 

**✨ Dúvidas?** Abra uma *issue* ou contribua!  
